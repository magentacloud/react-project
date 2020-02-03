import React from 'react';

function CreateListButton(props) {
        if(!props.isShowed){
            return null;
        }
        return (
            <div className="addButton mx-1 my-2 p-1" onClick={props.onClick}>Add list</div>
        )
}
export default CreateListButton;