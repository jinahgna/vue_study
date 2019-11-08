<template>
  <div class="home">
    <h1>대한민국 구석구석 여행지</h1>
    <search/>
    <destinationList/>
  </div>
</template>

<script>
import search from '@/components/search.vue'
import destinationList from '@/components/destinationList.vue'

export default {
  name: 'home',
  components: {
      search,
      destinationList
  },
    created () {

    }
}
</script>

<style scoped>
  .home {padding-top:100px; width:100%;}
</style>
