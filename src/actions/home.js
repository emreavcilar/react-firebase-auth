import * as types from "../config/constants/action-types";

export const getHomeDataResult = (payload) => ({
    type: types.GET_HOME_DATA,
    payload: payload
});

export const getHomeData = () => dispatch => {
    //dispatch(getHomeDataResult(res.data.success))
};