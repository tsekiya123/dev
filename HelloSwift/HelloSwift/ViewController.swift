//
//  ViewController.swift
//  HelloSwift
//
//  Created by 関屋達貴 on 2016/11/22.
//  Copyright © 2016年 関屋達貴. All rights reserved.
//

import UIKit
// import Alamofire
import CocoaAsyncSocket

class ViewController: UIViewController, UIWebViewDelegate, GCDAsyncSocketDelegate, GCDAsyncUdpSocketDelegate {
    
    
    @IBOutlet weak var reloadButton: UIButton!
    @IBOutlet weak var webView: UIWebView!

    var targetURL = "http://127.0.0.1:8080/"
    
    let IP = "90.112.76.180"
    let PORT:UInt16 = 5556
    
    @IBAction func doRefresh(_ reloadButton: UIButton!) {
        webView.reload()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        webView.delegate = self

        // Do any additional setup after loading the view, typically from a nib.
        var udpSocket:GCDAsyncUdpSocket!;
        udpSocket = GCDAsyncUdpSocket(delegate: self, delegateQueue: DispatchQueue.main)
        do {
            try udpSocket.connect(toHost: IP, onPort: PORT)
        } catch {
            print("ErrorReceive")
        }
        
        let data = ("M-SEARCH * HTTP/1.1'\r\nST: urn:panasonic-com:device:p00RemoteController:1\r\nMX: 1\r\nMAN: \"ssdp:discover\"\r\nHOST: 239.255.255.250:1900\r\n\r\n\r\n" as NSString).data(using: 4)!
        //data = data.dataUsingEncoding(NSUTF8StringEncoding)!

        //Binding to port
        do {
            try udpSocket.bind(toPort: 2025)
            try udpSocket.joinMulticastGroup("239.5.6.7")
            udpSocket.send(data, withTimeout: 2, tag: 0)
            try udpSocket.beginReceiving()
        } catch {print("ErrorReceive")}
        
        print("UDP socket was opened!")
        
        let requestURL = NSURL(string: targetURL)
        let req = NSURLRequest(url: requestURL as! URL)
        self.webView.loadRequest(req as URLRequest)
        
    }
    
    func udpSocket(sock: GCDAsyncUdpSocket!, didReceiveData data: NSData!, fromAddress address: NSData!, withFilterContext filterContext: AnyObject!) {
        
        print("Got data!");
        
    }
    
    func webViewDidFinishLoad(_ webView: UIWebView) {
        let htmlTitle = webView.stringByEvaluatingJavaScript(from: "document.title");
        NSLog(htmlTitle!);
        NSLog("web loaded");
        // tokenのsetterを呼び出すnativeCalled
        let res = webView.stringByEvaluatingJavaScript(from: "pokemonGo();")
        NSLog("res is ", res!);
    }
}

