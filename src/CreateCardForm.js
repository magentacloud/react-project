import React from 'react';
import './styles/CreateCardForm.css';
function CreateCardForm(props) {
    if(!props.isShowed){
        return null;
    }
    return (
        <div className="createCardForm">
            <input className="cardTitleInputField mx-1" type="text"></input>
            <button className="confirmButton btn-success mx-1" onClick={props.handleAddingCard}>Add card</button>
            <button className="cancelButton btn-danger mx-1" onClick={props.onCancel}>Cancel</button>
        </div>
    )
}
export default CreateCardForm;