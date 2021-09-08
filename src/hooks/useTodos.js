import { useReducer, useEffect, useContext, createContext } from 'react'

const initialState = []

const TodosContext = createContext(initialState)

export function useTodos() {
    return useContext(TodosContext)
}

export function TodosProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        console.log('TodosContext');
        console.table(state);
    }, [state])
    return <TodosContext.Provider value={[state, dispatch]}>{children}</TodosContext.Provider>
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo = {
                title: action.payload.title,
                id: Date.now(),
                updatedAt: null,
                status: 1,
            };
            return [...state, newTodo]
        }
        case 'DELETE': {
            const todoIdx = state.findIndex(todo => todo.id === action.payload)
            const newState = [...state]
            newState.splice(todoIdx, 1)
            return newState
        }
        default:
            throw new Error(`Unkwnown action.type! (${action.type})`)
    }
}








// function red(state,action) {
//     switch (action.type) {
//         case `increment`:{ -return state +1
//         }

//         case `decrement`:{
//             return state -1
//         }

//         case `incrementAmount`:{
//             return state + action.payload
//         }

//         case `decrementAmount`:{
//             return state - action.payload
//         }
    
//         default:
//             throw new Error(`pizdeec na xolodec (${action.type})`)
//     }
// }