import React from 'react';
import './styles/CreateListForm.css';

class CreateListForm extends React.Component {
    render() {
        if(!this.props.isShowed){
        return null;
        }
        return(
            <div className="createListForm mx-1 my-2">
            <input className="titleInputField mx-1" type="text"></input>
            <button className="confirmButton btn-success mx-1" onClick={this.props.onConfirm}>Add list</button>
            <button className="cancelButton btn-danger mx-1" onClick={this.props.onCancel}>Cancel</button>
            </div>
        )
    }
}
export default CreateListForm;