import axios from "axios";
export function getGames() {
    return async function (dispatch) {
        // return fetch('/videogames')
        // .then(res=> res.json())
        // .then(data=> dispatch({
        //     type: 'GET_ALL_GAMES',
        //     payload: data
        // }))
        try {
            const videogames = await axios.get('/videogames')
            return dispatch({
                type: 'GET_ALL_GAMES',
                payload: videogames.data
            })
        } catch (e) {
            console.log(e);
        }        
    }
}

export function getGamesBySearch(name) {
    return async function (dispatch) {
        // return fetch(`/videogames?name=${name}`)
        // .then(res=> res.json())
        // .then(data=> dispatch({
        //     type: 'GET_GAME_SEARCH',
        //     payload: data
        // }))
        try {
            let videogames = await axios.get(`/videogames?name=${name}`)
            return dispatch({
                type: 'GET_GAME_SEARCH',
                payload: videogames.data
            })
        } catch (e) {
            console.log(e);
        }
    }    
}

export function gameDetail(id) {
    return async function (dispatch) {
        // return fetch(`/videogame/${id}`)
        // .then(res=> res.json())
        // .then(data=> dispatch({
        //     type: 'GET_DETAIL_GAME',
        //     payload: data
        // }))
        try {
            const detail = await axios.get(`/videogame/${id}`)
            return dispatch({
                type: 'GET_DETAIL_GAME',
                payload: detail.data
            })
        } catch (e) {
            console.log(e);
        }        
    }    
}

export function filterGameByGenre(payload) {
    return {
        type: 'FILTER_GAME_BY_GENRE',
        payload
    }
}

export function filterByCreated(payload) {
    return {
        type: 'FILTER_BY_CREATED',
        payload
    }    
}

export function sortAlfabéticamente(payload){
    return {
        type: 'SORT_BY_NAME',
        payload
    }
}

export function sortByRating(payload) {
    return {
        type: 'SORT_BY_RATING',
        payload
    }    
}

export function addGame(body) {
    return async function (dispatch) {
        // return axios.post('/videogames', body)
        // .then(data=> dispatch({
        //     type: 'ADD_GAME',
        //     payload: data
        // }))
        // .catch(e=>console.log(e))
        try {
            const add = await axios.post('/videogames', body)
            return dispatch({
                type: 'ADD_GAME',
                payload:  add.data
            })
        } catch (error) {
            console.log({error: error.message});
        }
    }    
}

export function getGenres() {
    return function (dispatch) {
        return axios.get('/genres')        
        .then(data=>dispatch({
            type: 'GET_GENRES',
            payload: data
        }))
    }    
}