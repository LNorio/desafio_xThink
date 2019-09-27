export default function total(state = 0, action){

    switch(action.type) {
        case 'MUDA_TOTAL':
            return {
                ...state, total: action.total
            }
        default:
            return state;
    }

}
