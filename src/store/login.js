export default {
    actions:{
        registerUser(context, {username,password,nickname}){
            new Promise((resolve, reject) => {
                let options = { 
                    username,
                    password,
                    nickname,
                    appKey: window.WebIM.config.appkey,
                    success: function (res) {
                        resolve(res)
                        console.log("注册成功",res)
                    },  
                    error: function (err) {
                        reject(err)
                        console.log("注册失败",err)
                    }, 
                    apiUrl: window.WebIM.config.apiURL
                }; 
                window.WebIM.conn.registerUser(options);
            })
        },
        onLogin(context, {username,password}){
            new Promise((resolve, reject) => {
                let options = { 
                    apiUrl: window.WebIM.config.apiURL,
                    username: username,
                    password: password,
                    appKey: window.WebIM.config.appkey,
                    success: function (res) {
                        resolve(res)
                        console.log(res,"登录成功")
                    },
                    error: function(err){
                        reject(err)
                        console.log(err,"登录失败")
                    }
                };
                console.log(options)
                window.WebIM.conn.open(options);
            })
        }
    }
}