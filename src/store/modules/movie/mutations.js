import commonMutationType from '@/store/mutationsType';

const mutations = {
    /**
     * @description 게시글 리스트 설정
     * @param state
     * @param payload 전달 받은 값: object
     */
    [commonMutationType.SET_BOXOFFICE_LIST](state, payload) {
        try {
            if (typeof payload === 'object') {
                state.boxOfficeListData = payload;
                console.log('state.boxOfficeListData ', state.boxOfficeListData )
            }
            console.log('state:', state);
            console.log('payload:', payload);
        } catch (e) {
            console.error(`[commonMutationType.SET_BOXOFFICE_LIST] error: ${e}`);
        }
    },
};

export default mutations;