import React from 'react'
import "./index.css";
import classNames from "classnames";

interface ICheckboxProps {
    checked: boolean;
    onCheck: () => void;
}


const Checkbox = (props: ICheckboxProps) => {
    return <div className="checkboxContainer" onClick={props.onCheck}>
        <div className="checkboxHidden"/>
        <div className={classNames({
            "checkbox": true,
            "checked": props.checked,
        })}>
            <svg className="checkboxIcon" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        </div>
    </div>
}

export default Checkbox
