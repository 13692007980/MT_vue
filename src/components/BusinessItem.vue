<template>
  <div class="busItem-wrapper" ref="shopWrapper">
    <div class="busItem-list">
      <div class="busItem-header">
        <div class="busItem-back" @click="BusinessBackBtn">
          <i class="icon-arrow_lift"></i>
        </div>
        <div class="busItem-title">团购详情</div>
        <div class="busItem-collection">
          <span>
            <img src="../assets/img/c.png" alt>
            <h3>收藏</h3>
          </span>
          <span>
            <i class="icon-menu"></i>
            <h3>导航</h3>
          </span>
        </div>
      </div>
      <div class="imgbox">
        <img
          src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@f70bb75"
          alt
        >
      </div>
      <div class="bgimg">
        <img :src="businessArr.bigshopimg" alt>
        <div class="bg"></div>
        <div class="img-title">
          <p class="t1">{{businessArr.shopname}}</p>
          <p class="t2">{{businessArr.imgtitle}}</p>
        </div>
      </div>

      <div class="price-wrapper">
        <div class="price-box">
          <p class="p1">{{businessArr.price}}</p>
          <p class="p2">元</p>
          <p class="p3" v-show="businessArr.marketprice">门市价:{{businessArr.marketprice}}元</p>
        </div>
        <div class="buy-box">
          <button class="buy-btn">立即抢购</button>
        </div>
      </div>

      <div class="service-wrapper">
        <div>
          <img src="../assets/img/service1.jpg" alt>
          <p>{{businessArr.support1}}</p>
        </div>
        <div>
          <img src="../assets/img/service2.jpg" alt>
          <p>{{businessArr.support2}}</p>
        </div>
        <div>
          <img src="../assets/img/service3.jpg" alt>
          <p class="np">已售{{businessArr.salenum}}</p>
        </div>
      </div>

      <div class="evaluate-wrapper">
        <div class="evaluate-header">
          <Star class="star"/>
          <div class="num">
            <p>{{businessArr.peoEvaluate}}人评价</p>
            <i class="icon-keyboard_arrow_right"></i>
          </div>
        </div>
        <div class="evaluate-content">
          <ul class="evaluate-list">
            <li
              v-for="s in businessArr.evaluateText"
              :key="s.id"
              class="evaluate-item"
              :class="{'active': s.color == 1}"
            >
              <p>{{s.text}}{{s.num}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="message-wrapper">
        <div class="message-header">商家信息</div>
        <div class="message-content">
          <div class="message-d1">
            <h3 class="message-title">{{businessArr.shopname}}</h3>
            <p class="message-city">{{businessArr.address}}</p>
            <div class="message-location">
              <img src="../assets/img/location.png" alt class="img-location">
              <p class="location-title">离我最近</p>
            </div>
          </div>
          <div class="bg-line"></div>
          <div class="message-d2">
            <div class="icon-temp"></div>
          </div>
        </div>
      </div>

      <div class="remarks-wrapper" v-show="businessArr.remarks">
        <div class="remarks-header">
          备注
        </div>
        <div class="remarks-content">
          <ul class="remarks-list">
            <li v-for="s in businessArr.remarks" :key="s.id" class="remarks-item">
              {{s}}
            </li>
          </ul>
        </div>
      </div>

      <div class="instructions-wrapper">
        <div class="instructions-header">
          购买须知
        </div>
        <div class="instructions-content">
          <div class="instructions-c1">
            <h3>有效期</h3>
            <p>{{businessArr.termOfValidity}}</p>
          </div>
          <div class="instructions-c1" v-show="businessArr.useTime">
            <h3>使用时间</h3>
            <p>{{businessArr.useTime}}</p>
          </div>
          <div class="instructions-c2">
            <h3>使用规则</h3>
            <ul class="instructions-list">
              <li v-for="s in businessArr.rules" :key="s.id" class="instructions-item">
                {{s}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { BUSINESS_BOOL_BACK } from "../store/mutation-types.js";
import BScroll from "better-scroll";
import Star from './Star'

export default {
  components:{
    Star
  },
  computed: {
    ...mapState(["businessArr"]),
  },
  methods: {
    ...mapMutations({
      BusinessBack: BUSINESS_BOOL_BACK
    }),

    BusinessBackBtn() {
      setTimeout(() => {
        this.BusinessBack(false);
      }, 500);
    },

    SHOPcroll() {
      if (!this.ShopScroll) {
        this.ShopScroll = new BScroll(this.$refs.shopWrapper, {
          scrollX: true,
          click: true,
          bounce: false
        });
      } else {
        this.ShopScroll.refresh();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log("执行")
      this.SHOPcroll();
    });
  },
  beforeDestroy() {
    console.log("卸载")
    this.SHOPcroll();
  }
};
</script>


<style lang="scss" scoped>
.busItem-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f0f0f0;
  z-index: 100;

  .busItem-list {
    width: 100vw;
    //   height: 800px;
  }
}

.busItem-header {
  width: 100vw;
  display: flex;
  background: #06c1ae;

  .busItem-back {
    background: #21897d;

    .icon-arrow_lift {
      display: inline-block;
      color: #fff;
      font-size: 26px;
      padding: 10px 10px 10px 10px;
    }
  }

  .busItem-title {
    font-size: 20px;
    color: #fff;
    padding: 12px 40px 0 70px;
  }

  .busItem-collection {
    span {
      width: 40px;
      display: inline-block;
      font-size: 10px;
      color: #fff;
      padding-top: 5px;
      text-align: center;
    }

    img {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }

    .icon-menu {
      display: inline-block;
      font-size: 20px;
      margin-bottom: 2px;
    }
  }
}

.imgbox {
  width: 100vw;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
}

.bgimg {
  width: 100vw;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.2;
  }

  .img-title {
    position: absolute;
    bottom: 20px;
    left: 0;
    color: #fff;

    .t1 {
      font-size: 20px;
      font-weight: 700;
      padding: 0 0 10px 10px;
    }

    .t2 {
      font-size: 12px;
      font-weight: 700;
      padding: 0 0 0 10px;
      color: #f0f0f0;
    }
  }
}

.price-wrapper {
  width: 100vw;
  display: flex;
  border-bottom: 1px solid #ddd8ce;
  background: #fff;

  .price-box {
    height: 60px;

    p {
      display: inline-block;
    }

    .p1 {
      font-size: 28px;
      color: #06c1ae;
      font-weight: 700;
      padding: 15px 0 0 10px;
    }
    .p2 {
      color: #06c1ae;
    }
    .p3 {
      margin-left: 5px;
      color: #999;
    }
  }

  .buy-box {
    flex: 1;
    position: relative;
    

    .buy-btn {
      border: 0;
      color: #fff;
      background: #f90;
      border-radius: 4px;
      padding: 7px 20px 7px 20px;
      font-size: 20px;
      position: absolute;
      top: 9px;
      right: 20px;
      outline: none;
    }
  }
}

.service-wrapper {
  width: 100vw;
  padding: 10px 0 10px 0;
  background: #fff;

  div {
    width: 50%;
    height: 30px;
    display: inline-block;
    text-align: center;

    img {
      width: 22px;
      height: 22px;
      float: left;
      margin: 5px 5px 0 10px;
    }

    p {
      display: inline-block;
      float: left;
      height: 22px;
      line-height: 22px;
      color: #6bbd00;
      font-size: 14px;
      margin: 5px 0 0 0;
    }

    .np {
      color: #666;
    }
  }
}

.evaluate-wrapper {
  width: 100vw;
  background: #fff;
  margin-top: 10px;

  .evaluate-header {
    width: 100vw;
    border-bottom: 1px solid #ddd8ce;
    overflow: hidden;

    .star{
      // padding-top: 10px;
      // padding-bottom: 20px;
      float: left;
      margin-top: 10px;
      margin-left: 10px;
    }

    .num {
      display: inline-block;
      width: 50%;
      height: 40px;
      float: right;
      overflow: hidden;
    }
    p {
      display: inline-block;
      float: left;
      font-size: 14px;
      color: #999;
      height: 20px;
      line-height: 20px;
      margin: 10px 0 0 60px;
    }

    .icon-keyboard_arrow_right {
      font-size: 20px;
      float: left;
      color: #999;
      margin-top: 10px;
    }
  }

  .evaluate-content {
    width: 100vw;
    overflow: hidden;

    .evaluate-list {
      overflow: hidden;
      padding-top: 10px;
    }

    .evaluate-item {
      float: left;
      border: 1.5px solid #acacac;
      text-align: center;
      padding: 5px 5px 5px 5px;
      border-radius: 4px;
      margin: 5px 5px 5px 10px;
      color: #999;
      font-size: 13px;
    }

    .active {
      border: 1.5px solid #fdb338;
      color: #fdb338;
    }

    p {
      display: inline-block;
      margin: 0;
    }
  }
}

.message-wrapper {
  width: 100vw;
  margin-top: 10px;
  background: #fff;

  .message-header {
    width: 100vw;
    font-size: 18px;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #ddd8ce;
  }

  .message-content {
    width: 100vw;
    display: flex;

    .message-d1 {
      width: 60%;
    }

    .message-title {
      font-weight: 700;
      margin: 15px 0 0 10px;
    }

    .message-city {
      font-size: 12px;
      color: #666;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      line-height: 14px;
      margin: 10px 0 10px 10px;
    }

    .message-location {
      overflow: hidden;
    }

    .location-title {
      font-size: 14px;
      color: #eb8706;
      float: left;
    }

    .img-location {
      display: inline-block;
      width: 12px;
      height: 14px;
      margin: 0 15px 15px 10px;
      float: left;
    }

    .bg-line{
      width: 1px;
      height: 60px;
      background: #ddd8ce;
      margin: 17px 0 0 15px;
    }

    .message-d2{
      flex: 1;
      text-align: center;
      line-height: 94.4px;
    }

    .icon-temp{
      display: inline-block;
      width: 25px;
      height: 25px;
      background-image: url('../assets/img/icon.png');
      background-size: 100px;
      background-position: 45px -26px;
    }
  }
}

.remarks-wrapper{
  width: 100vw;
  background: #fff;
  margin-top: 10px;

  .remarks-header{
    font-size: 15px;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #ddd8ce;
  }

  .remarks-content{
    width: 100vw;
  }

  .remarks-list{
    list-style-type: disc;
    width: 100vw;
    height: 100%;
    padding: 10px 10px 0 40px;

    .remarks-item{
      list-style-type: disc;
      font-size: 14px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
      line-height: 15px;
    }
  }
}

.instructions-wrapper{
  width: 100vw;
  background: #fff;
  margin-top: 10px;

  .instructions-header{
    font-size: 18px;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #ddd8ce;
  }

  .instructions-content{
    width: 100vw;
  }

  .instructions-c1{
    width: 100vw;

    h3{
      color: #ff9900;
      margin: 10px 0 10px 10px;
    }

    p{
      font-size: 14px;
      color: #333;
      margin: 10px 0 10px 15px;
      line-height: 20px;
      padding-right: 10px;
    }
  }

  .instructions-c2{
    width: 100vw;

    h3{
      color: #ff9900;
      margin: 10px 0 10px 10px;
    }

    .instructions-list{
      list-style-type: disc;
      width: 100vw;
      height: 100%;
      padding: 10px 10px 0 40px;
    }

    .instructions-item{
      list-style-type: disc;
      font-size: 14px;
      margin-bottom: 5px;
      letter-spacing: 0.5px;
      line-height: 20px;
      color: #333;
    }
  }
}
</style>
