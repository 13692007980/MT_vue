<template>
  <div class="home">
    <div class="app-list" ref="appWrapper">
      <div class="app-wrapper">
        <HomeHeader/>
        <div class="app-nav">
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home1.jpg">美食
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home2.jpg">猫眼电影
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home3.jpg">酒店
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home4.jpg">休闲娱乐
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home5.jpg">外卖
          </router-link>
        </div>
        <div class="app-nav">
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home6.jpg">KTV
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home7.jpg">周边游
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home8.jpg">丽人
          </router-link>
          <router-link tag="span" to="/sss">
            <img src="../assets/img/home9.jpg">小吃快餐
          </router-link>
          <router-link tag="span" to="/classification">
            <img src="../assets/img/home10.jpg">全部分类
          </router-link>
        </div>
        <HomeBusiness/>
        <HomeFooter />
      </div>
    </div>
    <router-view tag="div"></router-view>
    <BusinessItem v-if="this.$store.state.businessItemBool"/>
    <BaiduMap v-if="this.$store.state.CityBool" />

    <LoadingImg v-show="this.$store.state.loadingBool"/>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import BusinessItem from "../components/BusinessItem";
import HomeBusiness from "../components/HomeBusiness";
import BScroll from "better-scroll";
import BaiduMap from '../components/BaiduMap'
import HomeFooter from '../components/HomeFooter'

import LoadingImg from '../components/LoadingImg'

export default {
  data(){
    return{
      // loadingBool: false
    }
  },
  components: {
    HomeHeader,
    HomeBusiness,
    BusinessItem,
    BaiduMap,
    HomeFooter,

    LoadingImg
  },
  methods: {
    APPcroll() {
      if (!this.AppScroll) {
        this.AppScroll = new BScroll(this.$refs.appWrapper, {
          scrollX: true,
          click: true,
          bounce: false
        });
      } else {
        this.AppScroll.refresh();
      }
    }
  },
  mounted() {
    // this.APPcroll();
    this.$nextTick(() => {
      this.APPcroll();
    });
  },
  beforeDestroy() {
    this.APPcroll();
  }
};
</script>


<style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;

  .app-list {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .app-wrapper {
    width: 100vw;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app-nav {
  display: flex;
  padding-bottom: 10px;
  background: #fff;
  padding-top: 10px;

  span {
    width: 20%;
    font-size: 12px;
    text-align: center;

    img {
      width: 40px;
      height: 40px;
      display: block;
      margin-left: 12px;
      margin-bottom: 5px;
    }
  }
}
</style>
