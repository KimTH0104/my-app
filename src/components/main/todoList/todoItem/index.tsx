import React from  'react';
import moment from "moment";
import Checkbox from "../../../shared/checkbox";
import classNames from "classnames";
import "./index.css";

export interface ITodoItem {
    id: string;
    title: string;
    expDate: moment.Moment;
    checked: boolean;
}

interface ITodoItemProps {
    item: ITodoItem;
    onCheck: (id: string) => void;
}

const TodoItem = (props: ITodoItemProps) => {

    const handleCheck = () => {
        props.onCheck(props.item.id);
    }

    return <div className="todoItemContainer">
        <div className="todoItemCheckbox">
            {/*<input type="checkbox" name={`check_${props.item.id}`} checked={props.item.checked} onClick={handleCheck}/>*/}
            <Checkbox checked={props.item.checked} onCheck={handleCheck}/>
        </div>
        <div className={classNames({"todoItemTitle": true, "checked":props.item.checked})}>{props.item.title}</div>
        <div className="todoItemExp">{moment(props.item.expDate).format("YYYY-MM-DD")}</div>
    </div>
}

export default TodoItem;
