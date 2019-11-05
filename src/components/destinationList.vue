<template>
  <div class="destination-list">
    <p  v-if="isResult === false">검색 결과가 없습니다.</p>
    <ul v-if="isResult === true">
      <li v-for="list in destinationList">
        <strong> {{ list.title }} </strong>
        <p> {{ list.addr1 }} </p>
      </li>
    </ul>
  </div>
</template>

<script>
    import axios from 'axios'
    import eventBus from '../main'
export default {
  name: 'destinationList',
  data () {
      return {
          destinationList: [],
          isResult: false
      }
  },
  methods: {

  },
    created () {
        const self = this;
        eventBus.$on('keyword', function (data) {
            const serviceKey = 'QBK%2FlSyT0QTA%2F9qIlwhVlxwr%2FGep9McM%2B5c2y5DdJE4RuhiylG9vaYGiYIqz%2F4UamfDAYURZ84JjA%2FlIq6spwA%3D%3D';
            const mobileApp = 'vue_study';
            const numOfRows = '100';
            const contentTypeId = '12';
            const keyword = data;

            console.log('받음', keyword);
            axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?serviceKey=' + serviceKey +
                '&MobileApp='+mobileApp+
                '&MobileOS=ETC&pageNo=1&numOfRows='+numOfRows+
                '&listYN=Y&arrange=A&contentTypeId='+contentTypeId+
                '&keyword='+keyword+'')
                .then(function(result) {
                    self.destinationList = result.data.response.body.items.item;
                    self.isResult = true;
                })
                .catch(function(error) {
                    console.log(error)
                })

        });


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
