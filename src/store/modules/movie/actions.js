import commonActionType from '@/store/actionsType';
import commonMutationType from '@/store/mutationsType';
import apiModule from '@/api/movieModule';

const actions = {
	/**
	 * @description action 게시판 리스트 조회
	 * @param commit
	 * @param payload 전달 받은 값
	 */
	async [commonActionType.ACTION_BOXOFFICE_LIST]({
		commit
	}, payload) {
		// 방법1
		try {
			await apiModule.getModule('/boxoffice/searchDailyBoxOfficeList.json', payload).then((result) => {
				commit(commonMutationType.SET_BOXOFFICE_LIST, result.data.boxOfficeResult);
			});
		} catch (e) {
			console.log('박스오피스 조회 실패');
		}
		// 방법2
		// try {
		// 	const boardList = await apiModule.getModule('/getBoardList', payload);
		// 	commit(commonMutationType.SET_BOARD_LIST, boardList.data.result);
		// } catch (e) {
		// 	console.log('게시판 조회 실패');
		// }
	},
};

export default actions;