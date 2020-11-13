<template>
  <CElementCover v-if="getIsLoading"
                 :boundaries="[{ sides: ['top', 'left'], query: '.media-body' }]"
                 :opacity="0.8"
  >
    <h1 class="d-inline">Loading... </h1>
    <CSpinner size="5xl" color="success"/>
  </CElementCover>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "AppLoading",
  computed: {
    ...mapGetters(["getIsLoading"]),
  }
}
</script>

<style scoped>

</style>
