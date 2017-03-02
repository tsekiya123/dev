package com.myapp.android.fcm;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.support.annotation.RequiresApi;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationManagerCompat;
import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;
import com.myapp.android.MainActivity;
import com.myapp.android.R;


/**
 * Created by t_sekiya on 2017/02/28.
 */

public class FcmService extends FirebaseInstanceIdService{

    private static final String TAG = "FcmService";
    public void onTokenRefresh() {
        // Get updated InstanceID token.
        String refreshedToken = FirebaseInstanceId.getInstance().getToken();
        Log.d(TAG, "Refreshed token: " + refreshedToken);

        sendNotification();

        // If you want to send messages to this application java.lang.Stringinstance or
        // manage this apps subscriptions on the server side, send the
        // Instance ID token to your app server.
        // sendRegistrationToServer(refreshedToken);
    }

    private static final int NOTIFICATION_ID = 0;
    private static final int REQUEST_CODE = 0;
    private static final long[] vibration = {0, 1000, 500, 1000, 500, 1000};
    private static final int requestCode = 0;

    private void sendNotification() {

        NotificationCompat.Builder builder = new NotificationCompat.Builder(getApplicationContext());

        builder.setPriority(NotificationCompat.PRIORITY_HIGH);
        builder.setSmallIcon(R.mipmap.ic_launcher);
        builder.setContentTitle("Title"); // 1行目
        builder.setSound(Settings.System.DEFAULT_ALARM_ALERT_URI);
        builder.setVibrate(vibration);

        // 適当なIntent
        Intent intent = new Intent(getApplicationContext(), MainActivity.class);

        PendingIntent contentIntent = PendingIntent.getActivity(
                getApplicationContext(),
                REQUEST_CODE,
                intent,
                PendingIntent.FLAG_CANCEL_CURRENT
        );
        builder.setContentIntent(contentIntent);
        // http://tiro105.hateblo.jp/entry/2014/05/28/152909

        NotificationManagerCompat manager = NotificationManagerCompat.from(getApplicationContext());
        manager.notify(NOTIFICATION_ID, builder.build());

        // 通知バー押下時にアプリ再立ち上げ
        // アプリ起動中は通知バーを表示せず、画面更新
        // Intentの設定

        // 気になる事
        // getSystemService()
        // MainApplication.getContext



//        Notification noti = new Notification.Builder(getApplicationContext())
//                .setContentTitle("Content Title")
//                .setContentText("Content Text")
//                .setSmallIcon(R.drawable.new_mail)
//                .setLargeIcon(aBitmap)
//                .build();
//        Notification n = new Notification(); // Notificationの生成
//        n.icon = R.drawable.coda; // アイコンの設定
//        n.tickerText = "This is a notification message..."; // メッセージの設定
//
//        Intent i = new Intent(getApplicationContext(), MainActivity.class);
//        PendingIntent pi = PendingIntent.getActivity(this, 0, i, 0);
//        n.setLatestEventInfo(getApplicationContext(), "TITLE", "TEXT", pi);
//        n.contentIntent.
//
//        long[] vibrate_ptn = {0, 100, 300, 1000}; // 独自バイブレーションパターン
//        n.vibrate = vibrate_ptn; // 独自バイブレーションパターンを設定
//
//        n.defaults |= Notification.DEFAULT_LIGHTS; // デフォルトLED点滅パターンを設定
//
//        // NotificationManagerのインスタンス取得
//        NotificationManager nm =
//                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
//        nm.notify(1, n); // 設定したNotificationを通知する
    }
}
