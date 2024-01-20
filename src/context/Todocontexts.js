import { createContext , useContext } from "react";

export const Todocontexts = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg ",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,Todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(Todocontexts)
} 

export const Todoprovider =  Todocontexts.Provider