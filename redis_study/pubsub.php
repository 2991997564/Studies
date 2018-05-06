<?php

// 简单发布订阅实战

//以下是 pub.php 文件的内容 cli下运行
ini_set('default_socket_timeout', -1);
$redis->connect('127.0.0.1', 6379);
$strChannel = 'Test_bihu_channel';

//发布
$redis->publish($strChannel, "来自{$strChannel}频道的推送");
echo "---- {$strChannel} ---- 频道消息推送成功～ <br/>";
$redis->close();


//以下是 sub.php 文件内容 cli下运行
ini_set('default_socket_timeout', -1);
$redis->connect('127.0.0.1', 6379);
$strChannel = 'Test_bihu_channel';

//订阅
echo "---- 订阅{$strChannel}这个频道，等待消息推送...----  <br/><br/>";
$redis->subscribe([$strChannel], 'callBackFun');
function callBackFun($redis, $channel, $msg)
{
    print_r([
        'redis'   => $redis,
        'channel' => $channel,
        'msg'     => $msg
    ]);
}