mqtt
  mouquitto

(mqtt client(publisher))
↓
(mqtt broker)
↓
(mqtt client(subscriber))
  pubを受けたら加工してSNSへ…

起動コマンド
/usr/local/opt/mosquitto/sbin/mosquitto

pub
/usr/local/bin/mosquitto_pub -t test -m hello

sub
/usr/local/bin/mosquitto_sub -t test

参考サイト
http://qiita.com/n-yamanaka/items/73e4d3022186732b4e88
http://minor.hatenablog.com/entry/2015/02/08/221819
