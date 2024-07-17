import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: 'hiddenArticles',
  initialState,
  reducers: {
    	addArticle: (state, action) => {
			state.value.push(action.payload);
		},
		removeArticle: (state, action) => {
			state.value = state.value.filter(article => article.title !== action.payload.article);
		},
		removeAllArticles: (state) => {
			state.value = [];
		},
  },
});

export const { addArticle, removeArticle,removeAllArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
