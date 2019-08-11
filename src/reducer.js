const reducer = (state, action) => {
    switch(action.type){
        case 'TOGGLE_SIDENAV':
            return {
            ...state,
            navOpen: action.payload
            }
        default:
            throw Error('reducer error');
    }
}

export default reducer;
