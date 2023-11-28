import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = {
    param:''
};


const filterSlice = createSlice({
    name: 'ç',
    initialState: filtersInitialState,
    reducers: {
        changeFilterParam(state, action) { 
            state.param = action.payload;
         
        }
    }
})

export const {changeFilterParam} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

export const getFilterParam = state => state.filters.param
