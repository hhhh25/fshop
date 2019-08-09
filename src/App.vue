<template>
    <div>
        <!-- 路由组件 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
export default{
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

