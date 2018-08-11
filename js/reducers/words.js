
const initalState = {
    allWords: []
}

export const words = (state = initalState, action) => {
    switch (action.type) {

        case 'ADD_NEW_WORD': {
            return {
                allWords: [
                    ...state.allWords,
                    action.newWord
                ]
            }
        }
            
        default:
            return state
    }
}


// const initalState = {
//     allWords: []
// }

// export const words = (state = initalState, action) => {
//     switch (action.type) {

//         case 'ADD_NEW_WORD': {
//             return {
//                 allWords: [
//                     ...state.allWords,
//                     action.newWord
//                 ]
//             }
//         }
            
//         default:
//             return state
//     }
// }