<template>
  <span class="star-container" :class="'star-'+size">
    <span class="star-item" v-for="(s,i) in starArr" :key="i" :class="s"></span>
  </span>
</template>


<script>
const ARR_LENGTH = 5;
const STAR_OFF = "off";
const STAR_HALF = "half";
const STAR_ON = "on";

export default {
  data(){
    return{
      size: 36,
      score: 0
    }
  },
  computed: {
    starArr() {
      let score = Math.floor(this.score * 2) / 2;
      let result = [];
      for (let i = 0; i < ARR_LENGTH; i++) {
        if (Math.floor(score) > i) {
          result.push(STAR_ON);
        } else if (Math.floor(score) === i && score > i) {
          result.push(STAR_HALF);
        } else {
          result.push(STAR_OFF);
        }
      }
      return result;
    }
  },
  mounted(){
    console.log(this.$store.state.Star)
    this.score = this.$store.state.Star
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/mixin";

.star-container {
  // width: 50%;  

  .star-item {
    display: inline-block;
  }
}

.star-48 {
  .star-item {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    // vertical-align: top;

    &:last-child {
      margin-right: 0;
    }

    &.on {
      @include bg-image("../assets/img/star48_on", 24px 24px);
    }
    &.off {
      @include bg-image("../assets/img/star48_off", 24px 24px);
    }
    &.half {
      @include bg-image("../assets/img/star48_half", 24px 24px);
    }
  }
}

.star-36 {
  .star-item {
    width: 18px;
    height: 18px;
    margin-right: 9px;
    // vertical-align: top;

    &:last-child {
      margin-right: 0;
    }

    &.on {
      @include bg-image("../assets/img/star36_on", 18px 18px);
    }
    &.off {
      @include bg-image("../assets/img/star36_off", 18px 18px);
    }
    &.half {
      @include bg-image("../assets/img/star36_half", 18px 18px);
    }
  }
}

.star-24 {
  .star-item {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    // vertical-align: top;

    &:last-child {
      margin-right: 0;
    }

    &.on {
      @include bg-image("../assets/img/star24_on", 12px 12px);
    }
    &.off {
      @include bg-image("../assets/img/star24_off", 12px 12px);
    }
    &.half {
      @include bg-image("../assets/img/star24_half", 12px 12px);
    }
  }
}
</style>
