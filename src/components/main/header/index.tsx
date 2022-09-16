import React, {useEffect, useState} from 'react';
import getDate from "../../../api/get/getDate";
import moment from "moment/moment";
import {ITodoItem} from "../todoList/todoItem";
import "./index.css";

interface IHeaderProps {
    todoList: ITodoItem[];
    onClean: () => void;
}

const HeaderComp = (props: IHeaderProps) => {
    const [date, setDate] = useState(moment(moment.now()))

    useEffect(() => {
        getDate.fetch().then((res) => {
            setDate(moment(res.data.datetime))
        })
    },[])

    return <div className="headerRoot">
        <div className="headerContentWrapper">
            <div className="headerDay">{date.format("dddd, Do")}</div>
            <div className="headerLen">{props.todoList.length} Task</div>
        </div>
        <div className="headerContentWrapper">
            <div className="headerMonth">{date.format("MMMM")}</div>
            <div className="headerButtonWrapper">
                <button className="headerButton" onClick={() => props.onClean()}>CLEAR LIST</button>
            </div>
        </div>
    </div>
}

export default HeaderComp;
