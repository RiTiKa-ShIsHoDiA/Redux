const initialState = 5;
const mulNumber = (state = initialState,action) => {
    switch(action.type){
        case "MULT" :  return state*action.payload;
        case "DIV" :  return state/5;
        default : return state;
    }
}
export default mulNumber;