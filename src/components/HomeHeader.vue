<template>
    <div class="HomeHeader-wrapper">
        <div class="header-wrapper" v-if="!this.$store.state.CityBool">
            <div class="header-city" @click="SelectCity">
                {{LocationCity}}
                <i class="icon-keyboard_arrow_right"></i>
            </div>
            <div class="header-search">
                <div class="icon-box">
                    <i class="icon-search"></i>
                </div>
                <input type="text" placeholder="请输入商家名、品类">
            </div>
            <div class="header-user">
                <img src="../assets/img/user.png" class="user">
            </div>
        </div>
        <div class="APP-wrapper" v-show="!this.$store.state.CityBool">
            <div class="mt-img">
                <img src="../assets/img/mt-app.png" alt="">
            </div>
            <div class="mt-title">
                <p class="t1">省钱利器 购物超划算</p>
                <p class="t2">吃喝玩乐尽在美团</p>
            </div>
            <div class="app-btn">
                <button class="btn">去APP</button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=XE9xErr0wmqsYGPFfLM8j0tsnYXUoHnd"></script>
<script>
// import BaiduMap from './BaiduMap'
import { mapMutations } from 'vuex'
import { CITY_TOGGLE, CITY_LOCATION } from '../store/mutation-types.js'

export default {
    data(){
        return{
            LocationCity: "正在定位...",
            city: ''
        }
    },
    // components:{
    //     BaiduMap
    // },
    mounted(){
        this.OnCity()
    },
    methods:{
        ...mapMutations({
            CityToggle :  CITY_TOGGLE,
            CityLocation : CITY_LOCATION
        }),

        OnCity(){
            let geolocation = new BMap.Geolocation()
            let _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let a = position.address.city
                let reg1 = new RegExp("市")
                let city = a.replace(reg1,"")
                // console.log(city)
                this.city = city
                _this.CityLocation(this.city)
                let b = position.address.province
                let reg2 = new RegExp("省")
                let province = b.replace(reg2,"")

                // console.log(province)
                _this.LocationCity = city
            }, function(){
                _this.LocationCity = "定位失败"
            },{provider: 'baidu'})
        },
        SelectCity(){
            this.CityToggle(true)
        }
    }
}
</script>


<style lang="scss" scoped>
.HomeHeader-wrapper{
    position: relative;
}

.header-wrapper{
    width: 100vw;
    display: flex;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);

    .header-city{
        // width: 80px;
        padding: 15px 5px 10px 20px;

        .icon-keyboard_arrow_right{
            display: inline-block;
            transform: rotate(90deg);
        }
    }

    .header-search{
        padding: 10px 0 10px 0 ;
        position: relative;
        overflow: hidden;

        input{
            border: 0;
            width: 180px;
            height: 25px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            outline: none;
            padding-left: 10px;
            background: #FFFFFF;
            color: #999999;
            opacity: 0.9;
            font-size: 12px;
            box-sizing: border-box;
            
        }

        .icon-box{
            display: inline-block;
            height: 25px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            float: left;
            opacity: 0.9;
            background: #FFFFFF;
        }

        .icon-search{
            display: inline-block;
            z-index: 1;
            font-size: 13px;
            color: #9999;
            padding-left: 4px;
            padding-top: 7px;
            float: left;
            box-sizing: border-box;
        }
    }

    .header-user{
        .user{
            display: inline-block;
            width: 26px;
            height: 26px;
            color: #999;
            margin: 10px 0 5px 10px;
        }
    }
}

.APP-wrapper{
    width: 100vw;
    background: #000;
    display: flex;

    .mt-img{
        padding: 5px 0 5px 15px;

        img{
            width: 40px;
            height: 40px;
        }
    }

    .mt-title{

        .t1{
            color: #fff;
            font-size: 13px;
            padding: 10px 0 0 10px;
        }

        .t2{
            color: #f0f0f0;
            font-size: 11px;
            padding: 5px 0 0 10px;
        }
    }

    .app-btn{
        padding: 10px 0 0 60px;

        .btn{
            width: 60px;
            height: 30px;
            border: 0;
            background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
            border-radius: 6px;
        }
    }
}
</style>
