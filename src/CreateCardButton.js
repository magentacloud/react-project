import React from 'react';
function CreateCardButton(props) {
    if(!props.isShowed){
        return null;
    }
    return (
        <div className="CreateCardButton mx-1 my-2" onClick={props.onClick}>Add another card</div>
    )
}

export default CreateCardButton;