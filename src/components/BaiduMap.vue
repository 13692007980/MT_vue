<template>
  <div class="map-wrapper" ref="IndexWrapper">
    <div>
      <div class="header-wrapper" v-if="this.$store.state.CityBool">
        <div class="header-city">
          <i class="icon-arrow_lift" @click="SelectCityBack"></i>
        </div>
        <div class="city-title">选择城市</div>
      </div>
      <div class="location-city">
        定位城市:
        <p>
          <img
            class="location-img"
            src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png"
            alt
          >
          {{LocationCity}}
        </p>
      </div>
      <div id="allmap"></div>
      <div class="r-result">
        <input type="text" v-model="city" placeholder="查询城市">
        <button class="sear-btn" @click="theLocation">查询</button>
      </div>
      <div class="IndexesCity-wrapper">
        <h3 class="IndexesCity-title">城市索引</h3>
        <div class="IndexesCity-content">
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">A</div>
                <div v-for="c in IndexesCity.CityName1" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">B</div>
                <div v-for="c in IndexesCity.CityName2" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">C</div>
                <div v-for="c in IndexesCity.CityName3" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">D</div>
                <div v-for="c in IndexesCity.CityName4" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">E</div>
                <div v-for="c in IndexesCity.CityName5" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">F</div>
                <div v-for="c in IndexesCity.CityName6" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">G</div>
                <div v-for="c in IndexesCity.CityName7" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">H</div>
                <div v-for="c in IndexesCity.CityName8" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">J</div>
                <div v-for="c in IndexesCity.CityName9" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">K</div>
                <div v-for="c in IndexesCity.CityName10" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">L</div>
                <div v-for="c in IndexesCity.CityName11" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">M</div>
                <div v-for="c in IndexesCity.CityName12" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">N</div>
                <div v-for="c in IndexesCity.CityName13" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">P</div>
                <div v-for="c in IndexesCity.CityName14" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">Q</div>
                <div v-for="c in IndexesCity.CityName15" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">R</div>
                <div v-for="c in IndexesCity.CityName16" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">S</div>
                <div v-for="c in IndexesCity.CityName17" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">T</div>
                <div v-for="c in IndexesCity.CityName18" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">W</div>
                <div v-for="c in IndexesCity.CityName19" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">X</div>
                <div v-for="c in IndexesCity.CityName20" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">Y</div>
                <div v-for="c in IndexesCity.CityName21" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
            <div class="IndexesLetter-item">
                <div class="IndexesLetter">Z</div>
                <div v-for="c in IndexesCity.CityName22" :key="c.id" class="IndexesCity-item" @click="IndexesCityClick(c)">
                  {{c}}
                </div>
            </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  </div>
</template>

<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=XE9xErr0wmqsYGPFfLM8j0tsnYXUoHnd"></script>
<script>
import { mapMutations, mapState } from "vuex";
import { CITY_TOGGLE_BACK,CITY_LOCATION } from "../store/mutation-types.js";

import HomeFooter from './HomeFooter'

import BScroll from "better-scroll";

export default {
  data() {
    return {
      city: "",
      province: "",
      map: "",
      point: {
        lat: 0,
        lng: 0
      },
      IndexesCity: {}
    };
  },
  components:{
    HomeFooter
  },
  computed: {
    ...mapState({
      LocationCity: "LocationCity"
    })
  },
  methods: {
    ...mapMutations({
      CityToggleBack: CITY_TOGGLE_BACK,

      CityLocation: CITY_LOCATION
    }),
    IndexesScroll() {
      if (!this.Indexesscroll) {
        this.Indexesscroll = new BScroll(this.$refs.IndexWrapper, {
          scrollX: true,
          click: true,
          bounce: false
        });
      } else {
        this.Indexesscroll.refresh();
      }
    },

    City() {
      let geolocation = new BMap.Geolocation();
      let _this = this;

      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            _this.map.addOverlay(mk);
            _this.map.panTo(r.point);
            console.log("您的位置：" + r.point.lng + "," + r.point.lat);
            _this.point.lat = r.point.lat;
            _this.point.lng = r.point.lng;
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    },

    theLocation() {
      let city = this.city;
      if (city != "") {
        this.map.centerAndZoom(city, 11); // 用城市名设置地图中心点
      }
    },

    IndexesCityClick(city){
      if (city != "") {
        this.CityLocation(city)
        this.map.centerAndZoom(city, 11); // 用城市名设置地图中心点
      }
    },

    SelectCityBack() {
      this.CityToggleBack(false);
    }
  },
  mounted() {
    let map = new BMap.Map("allmap");
    this.map = map;
    let point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 10);

    let navigationControl = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,

      type: BMAP_NAVIGATION_CONTROL_LARGE,

      enableGeolocation: true
    });
    map.addControl(navigationControl);

    let geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function(e) {
      let address = "";
      address += e.addressComponent.province;
      address += e.addressComponent.city;
      address += e.addressComponent.district;
      address += e.addressComponent.street;
      address += e.addressComponent.streetNumber;
      alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError", function(e) {
      alert(e.message);
    });
    map.addControl(geolocationControl);

    this.City();

    this.axios("/api/IndexesCity").then(res => {
        this.IndexesCity = res.data.data
        console.log(this.IndexesCity)

        this.$nextTick(() => {
            this.IndexesScroll();
        });
    });
  },
  beforeDestroy() {
    this.IndexesScroll();
  }
};
</script>


<style lang="scss" scoped>
.map-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background: #f0efed;
  z-index: 300;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#allmap {
  width: 90%;
  height: 250px;
  overflow: hidden;
  margin-left: 5%;
}

.header-wrapper {
  width: 100vw;
  display: flex;
  background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);

  .header-city {
    // width: 80px;
    padding: 15px 5px 10px 20px;
  }

  .city-title {
    padding: 12px 0 0 85px;
    color: #333;
  }
}

.location-city {
  width: 90%;
  margin-left: 5%;
  background: #fff;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 0 10px 10px;
  border-radius: 4px;

  p {
    display: inline-block;
  }

  .location-img {
    display: inline-block;
    width: 12px;
    height: 15px;
    margin-right: 5px;
  }
}

.r-result {
  width: 100vw;
  background: #fff;
  width: 90%;
  margin: 10px 0 10px 5%;
  // padding: 10px 0 10px 10px;
  border-radius: 4px;

  input {
    border: 0;
    outline: none;
    padding: 10px 5px 10px 15px;
  }

  .sear-btn {
    border: 0;
    background: #ffd000;
    color: #fff;
    width: 60px;
    height: 25px;
    margin-left: 40px;
  }
}

.IndexesCity-wrapper {
  width: 100vw;
  padding: 0 10px 0 10px;

  .IndexesCity-title {
    color: #333;
    margin-bottom: 10px;
  }

  .IndexesCity-content{
    background-color: #fff;
  }

  .IndexesLetter-item{
    width: 100vw;
    overflow: hidden;

    .IndexesLetter{
      width: 75px;
      height: 75px;
      color: #B7B7B7;
      font-size: 36px;
      border: 0.5px solid #ddd8ce;
      text-align: center;
      line-height: 75px;
      float: left;
    }
  }

  .IndexesCity-item{
    float: left;
    width: 75px;
    height: 37.5px;
    border: 0.5px solid #ddd8ce;
    text-align: center;
    line-height: 37.5px;
    font-size: 14px;
    color: #333;
  }
}
</style>
