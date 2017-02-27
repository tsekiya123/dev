## 【deviceTokenを明示的に切り替える方法】

### １、DeleteTokenServiceクラスを作成する。

### ２、AndroidManifest.xmlにDeleteTokenServiceクラスの定義を追加する。
```
<service
    android:name="com.myapp.android.fcm.DeleteTokenService">
    <intent-filter>
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
    </intent-filter>
</service>
```

### ３、adbコマンドをコンソールで使えるようにする。

PATHにAndroidSDKを追加する。
File > Other Setting > Default Project Structure

/Users/t_sekiya/Library/Android/sdk/platform-tools

vi ~/.bash_profile
source ~/.bash_profile
vi ~/.bashrc
source ~/.bashrc

### ４、デバッグ中にコンソールから作成したDeleteTokenServiceを呼び出す
adb shell am startservice com.myapp.android/com.myapp.android.fcm.DeleteTokenService
