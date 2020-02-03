import React from 'react';
import './styles/EntryList.css';
import CreateCardButton from './CreateCardButton';
import CreateCardForm from './CreateCardForm';
import ListTitle from './ListTitle';
class EntryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.entry.title, cards: this.props.entry.body, isShowAddCardButton: true}
    }
    editTitle(e) {
        let newTitle = document.querySelector(".title-input");
        if(newTitle){
            console.log(this.props.id);
            this.props.handleChange(newTitle.value, this.props.id);
        }
    }

    addCreateCardForm() {
        this.setState({isShowAddCardButton: false});
    }
    hideCreateCardForm(){
        this.setState({isShowAddCardButton: true})
    }
    createEntryList(cards) {
        let res = cards.map((item) => 
        <div className="card my-2 mx-1">{item}</div>
        );
        return res;
    }
    addCard(e) {
        let newCardEntry = e.target.parentNode.firstChild.value;
        let cards = this.state.cards;
        if (newCardEntry === "") {
            newCardEntry = `Card #${cards.length}`;
        }
        cards.push(newCardEntry);
        this.setState({cards: cards, isShowAddCardButton: true})
    }
    render() {
        return(
        <div className="entryList mx-1 my-2">
            <ListTitle title={this.props.entry.title}
            onDoubleClick={this.editTitle.bind(this)}
            ></ListTitle>
            {this.createEntryList(this.state.cards)}
            <CreateCardButton
            isShowed={this.state.isShowAddCardButton} 
            onClick={this.addCreateCardForm.bind(this)}></CreateCardButton>
            <CreateCardForm 
            isShowed={!this.state.isShowAddCardButton}
            handleAddingCard={this.addCard.bind(this)}
            onCancel={this.hideCreateCardForm.bind(this)}></CreateCardForm>
        </div>
        )
        
    }
}


export default EntryList;