<template>
  <div class="movie">
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
		};
	},
    mounted () {
        this.loadView();
    },
    methods: {
        // api 호출
		async loadView() {
			const payload = {
				key: this.key,
                targetDt: '20200610',
                itemPerPage: '',
                multiMovieYn: '',
                repNationCd: '',
                wideAreaCd: '',
			};
            await this.$store.dispatch(commonActionType.ACTION_BOXOFFICE_LIST, payload);
            this.boxOfficeData = this.$store.state.movie.boxOfficeListData;
		},
    }
}
</script>

<style scoped>
</style>
