<template>
    <div class="business-wrapper">
        <div>
            <h3 class="business-title">猜你喜欢</h3>
            <div class="line"></div>
            <ul class="shop-list">
                <li v-for="(s,i) in businessArr.businesslist" :key="i" class="shop-item" @click="getIndex(i)">
                    <div class="shop-img">
                        <img :src="s.shopimg">
                    </div>
                    <div class="shop-text">
                        <p class="shop-name">{{s.shopname}}</p>
                        <p class="shop-title">{{s.title}}</p>
                        <div class="shop-price">
                            <p class="price">{{s.price}}</p>
                            <p class="xx">元</p>
                            <p class="ms-price" v-show="s.marketprice">门市价:{{s.marketprice}}元</p>
                            <p class="ms-discount" v-show="s.discount">{{s.discount}}</p>
                        </div>
                        <div class="now-shop">
                            已售{{s.salenum}}
                        </div>
                    </div>
                    <div class="item-line"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { GET_SHOP_ITEM, BUSINESS_BOOL, STAR, LOADING_IMG } from '../store/mutation-types.js'

export default {
    data(){
        return {
            businessArr:[],
        }
    },
    computed:{
        
    },
    methods:{
        ...mapMutations({
            getItem : GET_SHOP_ITEM,
            businessBool : BUSINESS_BOOL,
            StarH : STAR,
            LoadingBool: LOADING_IMG
        }),
        getIndex(index){
            let arr = this.businessArr.businesslist[index]
            let star = this.businessArr.businesslist[index].evaluate
            this.StarH(star)
            // console.log(star)
            this.getItem(arr)

            let random = Math.floor(Math.random() * 6000 + 1000)

            this.LoadingBool(true)

            setTimeout(() => {
                this.LoadingBool(false)
                this.businessBool(true)
            },random)
        }
    },
    mounted(){
        this.axios("/api/business").then(res => {
            this.businessArr = res.data.data;
        });
    }
}
</script>


<style lang="scss" scoped>
.business-wrapper{
    position: relative;
    width: 100vw;
    background: #fff;
    margin-top: 10px;

    .business-title{
        width: 100vw;
        padding: 10px 0 10px 10px;
    }

    .line{
        width: 90%;
        border-bottom: 1px solid #f0f0f0;
        margin-left: 5%;
    }

    .shop-list{
        width: 100vw;
        height: 100%;
    }

    .shop-item{
        width: 100vw;
        display: flex;
        position: relative;
        
        .item-line{
            width: 90%;
            border-bottom: 1px solid #f0f0f0;
            margin-left: 5%;
            position: absolute;
            bottom: 0;
        }

        .shop-img{
            width: 80px;
            height: 80px;
            margin: 10px 10px 10px 10px;
        }

        img{
            width: 100%;
            height: 100%;
        }

        .shop-text{
            position: relative;
            flex: 1;
        }

        .now-shop{
            position: absolute;
            top: 70px;
            left: 150px;
            font-size: 12px;
            color: #666;
        }

        .shop-name{
            color: #333;
            font-size: 16px;
            margin-top: 15px;
        }

        .shop-title{
            color: #666;
            height: 12px;
            font-size: 12px;
            margin-top: 5px;
            overflow: hidden;
        }
    }
    .shop-price{
        margin-top: 20px;

        p{
            display: inline-block;
        }

        .xx{
            font-size: 12px;
            color: #FE8C00;
        }

        .price{
            font-size: 18px;
            color: #FE8C00;
        }

        .ms-price{
            font-size: 12px;
            color: #666;
            margin-left: 5px;
        }

        .ms-discount{
            font-size: 12px;
            color: #f90;
            border: 1.5px solid #f90;
            border-radius: 4px;
            padding: 2px 2px 2px 2px;
            font-weight: 700;
            margin-left: 5px;
        }
    }
}
</style>
