<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  components: {
    Home
  },
};
</script>


<style lang="scss" scoped>
#app {
  position: relative;
  background: #f0efed;
  width: 100vw;
  height: 100vh;
  margin-bottom: -16px;
}
</style>
