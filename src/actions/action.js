const incCount = ()=>{
    return {
        type : "INC"
    }
}
const decCount = ()=>{
    return {
        type : "DEC"
    }
}
const reset = ()=>{
    return {type:"Re"}
}
const mult = (num)=>{
    return {
        type : "MULT",
        payload:num
    }
}
const div = ()=>{
    return {
        type : "DIV"
    }
}
 export {incCount,decCount,reset,mult,div};