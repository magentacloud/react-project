import React from 'react';
class ListTitle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isEditing: false}
    }
    handleDoubleClick(e){
        this.setState({isEditing: true});
        document.onclick = (e) => {
            if(!e.target.classList.contains("title-input")) {
                this.props.onDoubleClick(e);
                this.setState({isEditing: false});
            }
        }
    }
    render(){
        if (this.state.isEditing) {
            return(
                <input className="title-input mt-2" type="text"></input>
            )
        }
        return(
            <div className="title mx-2 mt-2" onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.title}</div>
        )
    }
}

export default ListTitle;