<template>
  <div id="app">
    <router-view></router-view>
    <AppLoading></AppLoading>
    <AppToaster></AppToaster>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex';
  import AppToaster from "@/components/AppToaster";
  import AppLoading from "@/components/AppLoading";

  export default {
    name: 'app',
    components: {AppLoading, AppToaster},
    data() {
      return {}
    },
    created() {
      if (this.getIsLogin) {
        this.$store.dispatch("getTradeResult");
        this.$store.dispatch("getUserAndMenus");
      }
    },
    computed: {
      ...mapGetters(["getIsLoading", "getMyToast","getIsLogin"]),
    }
  }
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
