<template>
    <div class="login-wrapper">
        <div class="login-header">
            <div class="d1"><i class="icon-arrow_lift" @click="BackHomeRouter"></i></div>
            <div class="d2">美团网</div>
            <div class="d3"><i class="icon-menu"></i></div>
        </div>
        <div class="login-router">
            <router-link to="/anlogin" tag="div">账号登录</router-link>
            <router-link to="/pvlogin" tag="div">手机验证登录</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        BackHomeRouter(){
            this.$router.push({
                path: '/home'
            })
            // this.$router.go(-1)
        }
    }
}
</script>


<style lang="scss" scoped>
.login-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 300;
    background: #f0efed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.login-header{
    width: 100vw;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    display: flex;

    .d1{
        padding: 12px 12px 12px 12px;
        font-size: 20px;
    }

    .d2{
        padding: 13px 0 12px 90px;
        font-size: 16px;
    }

    .d3{
        padding: 13px 0 12px 100px;
        font-size: 18px;
        color: #333;
    }
}

.login-router{
    width: 100vw;
    display: flex;
    padding: 0 10px 0 10px;
    background: #fff;

    div{
        display: inline-block;
        flex: 1;
        padding: 10px 0 10px 0;
        text-align: center;
        font-size: 13px;
        color: #222;
        border-bottom: 3px solid #f0efed;
    }

    .router-link-exact-active{
        border-bottom: 3px solid #FFC300;
        transition: all .3s;
    }
}
</style>
