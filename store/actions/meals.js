import { TOGGLE_FAVORITE, SET_FILTERS } from './types';


export const toggleFavorite = id =>{
    return { 
        type: TOGGLE_FAVORITE,
        mealId: id
    }
};

export const setFilters = filterSetting =>{
    return{
        type: SET_FILTERS,
        filter: filterSetting
    }
};