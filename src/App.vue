<template>
  <div id="app">
    <px-header/>
    <router-view/>
  </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: "App",
  components: {
    PxHeader,
  },
}
</script>
<style lang="scss">
</style>
