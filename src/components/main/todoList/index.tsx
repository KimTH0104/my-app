import React, {useCallback, useState} from 'react';
import moment from "moment/moment";
// @ts-ignore
import shortid from 'shortid';
import TodoItem, {ITodoItem} from "./todoItem";
import "./index.css";

interface todoListProps {
    todoList: any[];
    onAdd: (task: ITodoItem) => void;
    onCheck: (id: string) => void;
}

const TodoList = (props: todoListProps) => {

    const [text, setText] = useState<string>("");

    const addTask = (task: string) => {
        const taskId = shortid.generate();
        props.onAdd({id:taskId,  title: task, expDate: moment(moment.now()), checked: false});
        setText("");
    }

    const handleChange = (e : any) => {
        setText(e.target.value)
    }

    const handleCheck = (id: string) => {
        props.onCheck(id);
    }

    const renderTodo = (arr: ITodoItem[]) => {
        const rendComps = arr.map((item) => {
            return <TodoItem
                key={item.id}
                item={item}
                onCheck={handleCheck}
            />
        })

        return rendComps
    }

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            addTask(text);
        }
    }

    return <div className="todoListContainer">
        <div className="todoListAddHeader">
            <img
                className="todoListPlusIcon"
                src={require('../../../assets/icon/plus.png')}
                onClick={() => addTask(text)}
            />
            <input
                className="todoListInput"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={text}
                placeholder={"Type your task"}
            />
        </div>
        <div className="todoListContents">
            {renderTodo(props.todoList)}
        </div>
    </div>
}

export default TodoList;
