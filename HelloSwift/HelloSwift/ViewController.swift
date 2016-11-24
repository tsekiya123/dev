//
//  ViewController.swift
//  HelloSwift
//
//  Created by 関屋達貴 on 2016/11/22.
//  Copyright © 2016年 関屋達貴. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var webVIew: UIWebView!
    
    var targetURL = "https://google.co.jp/"

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let requestURL = NSURL(string: targetURL)
        let req = NSURLRequest(url: requestURL as! URL)
        self.webVIew.loadRequest(req as URLRequest)
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

