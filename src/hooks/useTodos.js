import { useReducer, useEffect, useContext, createContext } from 'react'

if (!localStorage.getItem(`todos`)) {
    localStorage.setItem(`todos`, JSON.stringify([]))
}


const initialState = JSON.parse(localStorage.getItem(`todos`))

const TodosContext = createContext(initialState)

export function useTodos() {
    return useContext(TodosContext)
}

export function TodosProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        console.log('TodosContext');
        console.table(state);
        localStorage.setItem(`todos`, JSON.stringify(state))
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
                completed: false
            };
            return [...state, newTodo]
        }
        case 'DELETE': {
            return state.filter(todo => todo.id !== action.payload)
        }
        case 'COMPLETE': {
            const todoIdx = state.findIndex(todo => todo.id === action.payload)
            const todo = {...state[todoIdx]}
            todo.completed = true
            const newState = [...state]
            newState.splice(todoIdx, 1, todo)
            return newState
        }
        case 'DELETE_COMPLETED': {
            return state.filter(todo => !todo.completed)
        }
        default:
            throw new Error(`Unkwnown action.type! (${action.type})`)
    }
}