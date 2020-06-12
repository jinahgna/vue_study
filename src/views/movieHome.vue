<template>
  <div class="movie" style="text-align:left">
    <input type="text" v-model="searchText">
    <button @click="searchMovie()">영화검색</button>
    <ul>
        <li></li>
    </ul>
    <h2>일별 박스오피스 10 </h2>
    <ul>
        <li v-for="(list, index) in boxOfficeData.dailyBoxOfficeList" :key="index">
            <strong>{{list.movieNm}}</strong>
            <p>개봉일 : {{ list.openDt }} / 누적관객수: {{list.audiAcc}}</p>
        </li>
    </ul>
  </div>
</template>

<script>

import commonMutationType from '@/store/mutationsType';
import commonActionType from '@/store/actionsType';

export default {
    name: 'movieHome',
    components: {
    },
    data() {
		return {
            key: 'b12f2221d401b22dda7ce6f92ea46fbb',
            boxOfficeData: '',
            todayDate: '',
            searchText: '',
            seachMovieData: '',
		};
	},
    mounted () {
        this.todayDate = new Date();
        this.todayDate = this.getFormatDate(this.todayDate);
        console.log('this.todayDate', this.todayDate);
        this.loadView();

    },
    methods: {
        // 박스오피스 api 호출
		async loadView() {
			const payload = {
				key: this.key,
                targetDt: this.todayDate,
                itemPerPage: '',
                multiMovieYn: '',
                repNationCd: '',
                wideAreaCd: '',
			};
            await this.$store.dispatch(commonActionType.ACTION_BOXOFFICE_LIST, payload);
            this.boxOfficeData = this.$store.state.movie.boxOfficeListData;
        },
        // 날짜 포멧 변환
         getFormatDate(date){
            let year = date.getFullYear();              //yyyy
            let month = (date.getMonth() + 1);          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            let day = (date.getDate() - 1);             //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '' + month + '' + day;       //yyyymmdd 형태생성
        },
         // 영화검색 api 호출
         async searchMovie() {
			const payload = {
                query: this.searchText,
                display: '',
                start: '',
                genre: '',
                country: '',
                yearfrom: '',
                yearto: '',
			};
            await this.$store.dispatch(commonActionType.ACTION_SEARCH_MOVIE, payload);
            this.seachMovieData = this.$store.state.movie.seachMovieData;
            console.log('this.seachMovieData', this.seachMovieData);
        },
    }
}
</script>

<style scoped>
</style>
