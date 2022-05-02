<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data () {
    return {
      locale: zhCN
    }
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
  min-width: 1300px;
}
@import "assets/common";
</style>
