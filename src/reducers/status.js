import {SEND_RES} from '../actions/user'
 const reducer=(state,action)=>{
     console.log(state)
    console.log(action)
    switch(action.type){
        case 'SEND_RES':       
        return {...state,clicked:'loaded successfully'}
        default:
        return state
}
}
export default reducer