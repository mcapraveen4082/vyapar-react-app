export const HELLO_APP = 'HELLO_APP';
export const GET_HELLO_APP = 'GET_HELLO_APP';


export const helloApp = payload => {
    return {
        type: HELLO_APP,
        payload,
    }
}
