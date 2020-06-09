<template>
    <div class="allIfication-wrapper">
        <div class="ification-header">
            <div class="ification-back" @click="AllBack">
                <i class="icon-arrow_lift"></i>
            </div>
            <h3 class="ification-title">分类</h3>
            <div class="ification-home">
                <i class="icon-search"></i>
            </div>
        </div>
        <div class="APP-wrapper">
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
        <div class="ification-box">
            <div class="ification-nav">
                <div class="ification-all fl">
                    全部分类
                </div>
                <div class="ification-city fl">
                    全城
                </div>
                <div class="ification-default fl">
                    默认排序
                </div>
            </div>
            <div class="ification-content" ref="NextPageWrapper">
                <div>
                    <ul class="ification-list">
                        <li class="ification-item" v-for="(item,i) in listArr" :key="i">
                            <div class="ification-img">
                                <img style="width: 100%; height: 100%" :src="item.img" alt="">
                            </div>
                            <div class="ification-item-con">
                                <h3>{{item.title}}</h3>
                                <p>{{item.content}}</p>
                                <div class="ification-price">
                                    <span class="h2">{{item.price}}</span>
                                    <span class="p2">元</span>
                                    <span class="p3">门市价:{{item.oldprice}}元</span>
                                    <span class="p4">已售{{item.nowsell}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="nextPage-box">
                        <button v-show="nextPage" class="nextPage-btn" @click="nextPageBtn">加载更多</button>
                        <span v-show="loadingNextBool" class="loadingNext"><img src="../assets/img/loading2.png" alt=""></span>
                        <span v-show="noPage" class="nextPage-tip">已无更多</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    data(){
        return{
            allification: [],

            listArr: [],

            nextPage: false,

            noPage: false,
            scrollHeight: 0,
            nowPage: 1,

            loadingNextBool: false
        }
    },
    methods:{
        AllBack(){
            this.$router.go(-1)
            this.$store.state.AllIficationBool = false
        },
        NextPageScroll() {
            if (!this.NextPagescroll) {
                this.NextPagescroll = new BScroll(this.$refs.NextPageWrapper, {
                scrollX: true,
                click: true,
                bounce: false
                });
            } else {
                this.NextPagescroll.refresh();
            }
        },
        scrollMore(){
            this.axios("/api/allIfication").then(res => {
                let list = res.data.data.ificationItem
                this.listArr = this.listArr.concat(list.slice(this.nowPage * 10, (this.nowPage + 1) * 10))
                this.nowPage ++
                if(list.length >= this.nowPage * 10){
                    this.nextPage = true
                }else{
                    this.nextPage = false
                    this.noPage = true
                }
            })
        },
        nextPageBtn(){
            this.nextPage = false
            this.loadingNextBool = true
            setTimeout(() => {
                this.nextPage = true
                this.loadingNextBool = false
                this.scrollMore()
            },1500)
        }
    },
    mounted(){
        this.axios("/api/allIfication").then(res => {
            let list = res.data.data.ificationItem

            if(list.length <= 8){
                this.listArr = list
            }else{
                this.listArr = list.slice(0, 10)
                this.nextPage = true
            }
            console.log(this.listArr)
            this.allification = res.data.data;
            

            this.$nextTick(() => {
                this.NextPageScroll()
            })
        })
    }
}
</script>


<style lang="scss" scoped>
.allIfication-wrapper{
    width: 100vw;
    height: 100vh;
    z-index: 300;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
}
.ification-header{
    // position: fixed;
    // top: 0;
    // left: 0;
    z-index: 50;
    width: 100vw;
    background: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
    overflow: hidden;

    .ification-back{
        width: 50px;
        height: 50px;
        background: rgba(0,0,0,.1);
        text-align: center;
        line-height: 50px;
        float: left;

        .icon-arrow_lift{
            font-size: 18px;
        }
    }

    .ification-title{
        display: inline-block;
        font-size: 16px;
        float: left;
        padding: 16px 0 0 100px;
    }

    .ification-home{
        float: right;
        margin: 16px 10px 0 0;

        img{
            width: 22px;
            height: 20px;
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

.ification-box{
    width: 100vw;

    .ification-nav{
        width: 100vw;
        display: flex;
        text-align: center;
        background: #fff;

        .fl{
            width: 33.3%;
            font-size: 14px;
            color: #666;
            padding: 15px 0 15px 0;
            border: 0.2px solid #f0f0f0;
        }
    }

    .ification-content{
        width: 100vw;
        height: 423px;
        z-index: 0;
        overflow: hidden;

        .ification-list{
            width: 100%;
        }

        .ification-item{
            width: 100%;
            display: flex;
        }

        .ification-img{
            width: 100px;
            height: 100px;
            padding: 10px 0 10px 10px;
            box-sizing: border-box;
        }

        .ification-item-con{
            flex: 1;
            padding: 10px 0 10px 10px;
            box-sizing: border-box;
        }
    }

    .ification-item-con{
        h3{
            margin-top: 5px;
        }

        p{
            font-size: 12px;
            width: 200px;
            word-break:keep-all;
            white-space:nowrap;
            text-overflow:ellipsis; 
            overflow: hidden;
            color: #666;
            margin-top: 5px;
        }
    }

    .ification-price{
        width: 100%;
        margin-top: 20px;
        overflow: hidden;

        .h2{
            font-size: 18px;
            color: #F60;
        }

        .p2{
            font-size: 12px;
            color: #F60;
        }

        .p3{
            font-size: 12px;
            color: #666;
            margin-left: 10px;
        }

        .p4{
            font-size: 12px;
            color: #666;
            float: right;
            margin-right: 4%;
        }
    }

}

.nextPage-box{
    width: 100vw;
    text-align: center;

    .nextPage-btn{
        display: inline-block;
        margin-bottom: 10px;
        background: #ffd000;
        border: 0;
        color: #fff;
        width: 100px;
        border-radius: 10px;
        outline: none;
    }

    .nextPage-tip{
        display: block;
        font-size: 12px;
        color: #666;
        margin-bottom: 10px;
    }

    .loadingNext{
        display: inline-block;
        width: 20px;
        height: 20px;

        img{
            width: 100%;
            height: 100%;
            -webkit-animation: run 1s linear infinite;
        }
    }
}

@keyframes run {
    from{
        -webkit-transform: rotate(360deg)
    }
    to{
        -webkit-transform: rotate(0deg)
    }
}
</style>
