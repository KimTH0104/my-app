import React, {useCallback, useEffect, useState} from 'react';
import Header from "./components/main/header";
import TodoList from "./components/main/todoList";
import {ITodoItem} from "./components/main/todoList/todoItem";
import './App.css';

const App = () => {
    const [todo, setTodo] = useState<ITodoItem[]>([])

    const clearList = () => {
        setTodo([]);
    }

    const addList = (task: ITodoItem) => {
        const tempTodo = todo;
        tempTodo.push(task)
        setTodo([...tempTodo]);
    }

    const checkItem = (id: string) => {
        let tempTodo = todo;
        const i = tempTodo.findIndex((t) => {return id === t.id})
        if ( todo[i].checked ) {
            tempTodo[i].checked = false;
            setTodo([...tempTodo]);
        } else {
            tempTodo[i].checked = true;
            setTodo([...tempTodo]);
        }
    }

    return (
        <div className="app">
            <div className='contents'>
                <Header
                    todoList={todo}
                    onClean={clearList}
                />
                <TodoList
                    todoList={todo}
                    onAdd={addList}
                    onCheck={checkItem}
                />
            </div>
        </div>
    );
}

export default App;
