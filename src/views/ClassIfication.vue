<template>
    <div class="ification-wrapper">
        <div class="ification-header">
            <div class="ification-back">
                <i class="icon-arrow_lift" @click="BackGo"></i>
            </div>
            <h3 class="ification-title">选择分类</h3>
            <div class="ification-home">
                <img src="../assets/img/home.png" alt="" @click="BackHome">
            </div>
        </div>
        <div class="ification-content" ref="IficationWrapper">
            <div>
                <div class="ification-all">
                    <button class="all-btn" @click="AllIficationBool">全部分类</button>
                </div>
                <div class="ification-list">
                    <div class="ification-itembox">
                        <h3 class="itembox-title">热门</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.popular" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">美食</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.food" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">酒店</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.hotel" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">周边游</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.journey" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">休闲娱乐</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.entertainment" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">学习培训</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.learning" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">购物</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.shopping" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">度假出行</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.vacation" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">宴会</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.banquet" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">时尚购</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.fashion" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">旅游</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.travel" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">丽人</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.beauty" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">生活服务</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.service" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">运动健身</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.exercise" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">母婴亲子</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.parenting" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">宠物</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.pets" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">汽车服务</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.carService" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">摄影写真</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.photography" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">结婚</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.marry" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">家装</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.decoration" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">医疗</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.medical" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">出境游</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.outbound" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                    <div class="ification-itembox">
                        <h3 class="itembox-title">抽奖</h3>
                        <ul>
                            <li class="ification-item" v-for="s in ificationItem.draw" :key="s.id">
                                {{s}}
                            </li>
                        </ul>
                    </div>
                </div>

                <HomeFooter />
            </div>
        </div>
        <AllIfication v-show="this.$store.state.AllIficationBool"/>
    </div>
</template>

<script>
import BScroll from "better-scroll";

import HomeFooter from "../components/HomeFooter"
import AllIfication from "../components/AllIfication"

import { mapMutations } from 'vuex'
import { ALLIFICATION_BOOL } from '../store/mutation-types.js'

export default {
    data(){
        return {
            ificationItem: {}
        }
    },
    components:{
        HomeFooter,
        AllIfication
    },
    methods:{
        ...mapMutations({
            getBool: ALLIFICATION_BOOL
        }),
        IficationScroll() {
            if (!this.Ificationscroll) {
                this.Ificationscroll = new BScroll(this.$refs.IficationWrapper, {
                scrollX: true,
                click: true,
                bounce: false
                });
            } else {
                this.Ificationscroll.refresh();
            }
        },
        BackGo(){
            this.$router.go(-1)
        },
        BackHome(){
            this.$router.push({
                path: '/home'
            })
        },
        AllIficationBool(){
            this.getBool(true)
        }
    },
    mounted(){
        this.axios("/api/ification").then(res => {
            this.ificationItem = res.data.data;
            console.log(this.ificationItem)

            this.$nextTick(() => {
                this.IficationScroll()
            })
        });
    },
    beforeDestroy() {
        this.IficationScroll();
    }
}
</script>



<style lang="scss" scoped>
.ification-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    background: #f0efed;
    width: 100vw;
    height: 100vh;
    z-index: 300;
    overflow: hidden;
}

.ification-header{
    position: fixed;
    top: 0;
    left: 0;
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
        padding: 16px 0 0 80px;
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

.ification-content{
    width: 100vw;
    height: 518px;
    margin-top: 50px;

    .ification-all{
        width: 100vw;

        .all-btn{
            width: 90%;
            margin-left: 5%;
            border: 0;
            background: #fff;
            padding: 8px 0 8px 0;
            border-radius: 4px;
            margin-top: 10px;
            outline: none;
        }
    }

    .ification-list{
        width: 100vw;
        margin-top: 20px;
    }

    .ification-itembox{ 
        width: 100vw;
        overflow: hidden;
        margin-bottom: 15px;

        .itembox-title{
            font-size: 20px;
            padding: 0 10px 10px 10px;
            // float: left;
        }

        ul{
            list-style: none;
            overflow: hidden;
            // width: 288px;
            // float: left;
            // margin-left: 5%;
            padding-left: 10px;
        }

        .ification-item{
            background: #fff;
            text-align: center;
            float: left;
            width: 32%;
            font-size: 14px;
            padding: 12px 0 12px 0;
            border: 0.2px solid #f0f0f0;
            color: #333;
            height: 38px;
        }
    }
}
</style>

