<template>
    <div class="footer-wrapper">
        <div class="footer1">
            <div class="Login-div">
                <router-link class="login" to='/login' tag="div">登录</router-link>
                <router-link class="register" to='/register' tag="div">注册</router-link>
            </div>
            <div class="Location-div">
                <div class="location-city">
                    城市:
                    <img class="location-img" src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt="">
                    {{LocationCity}}
                </div>
            </div>
        </div>
        <div class="footer2">
            <ul class="footer2-list">
                <li class="footer2-item">首页</li>
                <li class="footer2-item">我的</li>
                <li class="footer2-item">美团下载</li>
                <li class="footer2-item">电脑版</li>
                <li class="footer2-item">帮助</li>
            </ul>
        </div>
        <div class="footer3">
            友情链接:
            <a href="javascript:;">猫眼电影</a>
            <a href="javascript:;">大众点评</a>
            <a href="javascript:;">美团旅行</a>
            <a href="javascript:;">榛果民宿</a>
            <a href="javascript:;">大众点评下载</a>
            <a href="javascript:;">美团收银官网</a>
            <a href="javascript:;">美团点评餐饮学院</a>
            <a href="javascript:;">快驴进货商家合作</a>
        </div>
        <div class="footer4">
            <span class="line line-left"></span>
            <p class="footer-copyright-text">©2020 美团网 京ICP证070791号</p>
            <span class="line line-right"></span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            LocationCity : 'LocationCity'
        })
    }
}
</script>


<style lang="scss" scoped>
.footer-wrapper{
    width: 100vw;
    background: #fff;
    margin-top: 2px;
    padding: 10px 0 10px 0;

    .footer1{
        display: flex;

        .Login-div{
            width: 50%;
        }

        .Location-div{
            width: 50%;
        }

        .login{
            display: inline-block;
            border: 0;
            color: #222;
            width: 60px;
            height: 30px;
            border-radius: 6px;
            background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
            margin-left: 10px;
            outline: none;
            text-align: center;
            line-height: 30px;
        }

        .register{
            display: inline-block;
            border: 0;
            color: #222;
            width: 60px;
            height: 30px;
            border-radius: 6px;
            background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
            margin-left: 10px;
            outline: none;
            text-align: center;
            line-height: 30px;
        }

        .login{
            margin-left: 20px;
        }

        .location-city{
            font-size: 13px;
            padding: 5px 0 0 60px;
        }
        img{
            width: 13px;
            height: 15px;
            margin-left: 5px;
        }
    }

    .footer2{
        width: 100vw;

        .footer2-list{
            margin: 15px 0 10px 5%;
            width: 90%;
            overflow: hidden;
            display: flex;
            white-space: nowrap;
        }

        .footer2-list li:last-child{
            border-right: 0;
        }

        .footer2-item{
            float: left;
            flex: 1;
            display: list-item;
            font-size: 11px;
            color: #FE8C00;
            text-align: center;
            border-right: 1.5px solid #666;
        }
        
    }

    .footer3{
        width: 100vw;
        font-size: 11px;
        text-align: center;
        color: #646464;
        padding: 10px 20px 10px 20px;
        
        a{
            color: #646464;
            text-decoration: none;
            margin-left: 16px;
            line-height: 16px;
        }
    }

    .footer4{
        width: 90%;
        margin-left: 5%;
        height: 16px;
        text-align: center;

        .line{
            display: inline-block;
            width: 40px;
            height: 1px;
            background: #999;
            margin: 0 0 2px 0;
        }

        .line-left{
            margin-right: 5px;
        }

        .line-right{
            margin-left: 5px;
        }

        .footer-copyright-text{
            display: inline-block;
            color: #999;
            font-size: 10px;
        }
    }
}
</style>
