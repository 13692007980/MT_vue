import * as types from './mutation-types'

export default {
    [types.GET_API](state, API){
        state.API = API
        // console.log(state.API)
    },

    [types.GET_SHOP_ITEM](state,arr){ 
        state.businessArr = arr
    },

    [types.BUSINESS_BOOL](state, bool){
        state.businessItemBool = bool
    },

    [types.BUSINESS_BOOL_BACK](state, bool){
        state.businessItemBool = bool
    },

    [types.CITY_TOGGLE](state, bool){
        state.CityBool = bool
    },
    [types.CITY_TOGGLE_BACK](state, bool){
        state.CityBool = bool
    },

    [types.CITY_LOCATION](state, city){
        state.LocationCity = city
    },

    [types.STAR](state, star){
        state.Star = star
    },

    [types.LOADING_IMG](state, bool){
        state.loadingBool = bool
        console.log(bool)
    },

    [types.ALLIFICATION_BOOL](state, bool){
        state.AllIficationBool = bool
    }
}