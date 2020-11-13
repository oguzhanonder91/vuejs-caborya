<template>
  <CToaster :autohide="3000" position="top-right">
    <MyCToast :show.sync="getMyToast.show" :header="getMyToast.header">
      <CIcon :height="42" :name="getMyToast.icon"/>
      <b>{{ getMyToast.message }}</b>
    </MyCToast>
  </CToaster>
</template>

<script>

import {mapGetters} from 'vuex';
import MyCToast from "@/components/MyCToast";

export default {
  name: "AppToaster",
  components: {MyCToast},
  computed: {
    ...mapGetters(["getMyToast"]),
  }
}
</script>

<style scoped>

</style>
