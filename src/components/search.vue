<template>
  <div class="search-box">
    <input type="text" v-model="searchText" placeholder="지역명을 한 단어로 입력">
    <button v-on:click="searchStart">검색</button>
  </div>
</template>

<script>
    import eventBus from '../main'
export default {
  name: 'search',
  props: {
    // msg: String
  },
  data () {
      return {
          searchText: ''
      }
  },
  methods: {
      searchStart: function () {
          eventBus.$emit('keyword', this.searchText);
          console.log(this.searchText)
      }
  }
}
</script>

<style scoped>
  .search-box input{vertical-align:top; width:300px; height:30px; padding:0 10px; margin:0; border:1px solid #333;}
  .search-box button{vertical-align:top; line-height:32px; padding:0 10px; border:0; background-color:#333; color:#fff; }
</style>
