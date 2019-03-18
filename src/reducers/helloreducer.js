
const initialState = {

}
export const getHelloMsg = (state = initialState, action) => {
    switch (action.type) {
        case 'HELLO_APP':
            console.log('yes');
            return Object.assign( {},state, {
                message: 'Preveen Your redux saga reducers setup is done....'
            })
        default:
            return state;
    }
}

export const get_hello_call = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HELLO_APP':
            console.log('No');
            return Object.assign({}, state, {
                message1: 'Preveen Your redux saga Actions with reducers setup is done....'
            })
        default:
            return state;
    }
}