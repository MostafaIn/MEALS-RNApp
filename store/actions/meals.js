import { TOGGLE_FAVORITE } from './types';


export const toggleFavorite = id =>{
    return { 
        type: TOGGLE_FAVORITE,
        mealId: id
    }
};