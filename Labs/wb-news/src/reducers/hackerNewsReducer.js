import axios from "axios";

let initialState = {
    loading: false,
    articles: []
}

const requestArticles = async (dispatch) => {
    dispatch({
        type: "PENDING"
    });

    let articles = await axios.get('/api/hacker-news').then(res => res.data);

    dispatch({
        type: "REQUEST_ARTICLES",
        payload: articles
    });
}

const hackerNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PENDING":
            return {
                ...state,
                loading: true
            };
        case "REQUEST_ARTICLES":
            return {
                loading: false,
                articles: action.payload
            };
        default:
            return state;
    }
}

export { hackerNewsReducer, requestArticles };