import config from './WebIm.config'
import websdk from 'easemob-websdk'
// import emedia from 'easemob-emedia'
// import webrtc from 'easemob-webrtc'


var WebIM = {}

WebIM = window.WebIM = websdk

WebIM.config = config
WebIM.conn = new WebIM.connection({
    url: WebIM.config.xmppURL,    // xmpp Server地址
    apiURL: WebIM.config.apiURL,               // rest Server地址
    appKey: WebIM.config.appkey,        // App key

    isHttpDNS: WebIM.config.isHttpDNS,                          // 3.0 SDK支持，防止DNS劫持从服务端获取XMPPUrl、restUrl 

    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,          // 是否开启多页面同步收消息，注意，需要先联系商务开通此功能

    heartBeatWait: WebIM.config.heartBeatWait, //视频聊天

    isAutoLogin: true, //自动登录

    https : WebIM.config.https,                            // 是否使用https

    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,                   // 断线重连最大次数

    autoReconnectInterval: WebIM.config.autoReconnectInterval,                 // 断线重连时间间隔

    delivery: WebIM.config.delivery,                           // 是否发送已读回执
})

//兼容
if(!WebIM.conn.apiURL){
    WebIM.conn.apiURL = WebIM.config.apiURL 
}

// WebIM.WebRtc = webrtc
// WebIM.EmeDia = emedia

export default WebIM