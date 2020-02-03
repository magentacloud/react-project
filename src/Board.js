import React from 'react';
import './styles/Board.css';
import './EntryList';
import EntryList from './EntryList';
import CreateListForm from './CreateListForm';
import CreateListButton from './CreateListButton';
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {entries: [], isShowCreateListForm: false};
    }
    addCreateListForm() {
        this.setState({isShowCreateListForm: true});
    }

    addList(e) {
        let newListTitle = e.target.parentNode.firstChild.value;
        let lists = this.state.entries;
        if(newListTitle === ""){
            newListTitle = `List #${lists.length}`
        }
        lists.push({title: newListTitle, body: []});
        this.setState({entries: lists, isShowCreateListForm: false});
    }

    updateTitle(newTitle, id) {
        let entries = this.state.entries;
        console.log(entries);
        entries[id].title = newTitle;
        console.log(entries);
        this.setState({entries});
    }

    createEntriesArray(entries) {
        let arr = [];
        for(let i = 0; i < entries.length; i++) {
            arr.push(<EntryList key={i} id={i} entry={entries[i]} handleChange={this.updateTitle.bind(this)}></EntryList>)
        }
        return arr; 
    }

    hideCreateListForm() {
        this.setState({isShowCreateListForm: false});
    }
    render() {
        return (
            <div className="board">
                {this.createEntriesArray(this.state.entries)}
                <CreateListButton onClick={this.addCreateListForm.bind(this)} isShowed={!this.state.isShowCreateListForm}></CreateListButton>
                <CreateListForm isShowed={this.state.isShowCreateListForm}
                onConfirm={this.addList.bind(this)} 
                onCancel={this.hideCreateListForm.bind(this)}></CreateListForm>
            </div>
        );
    }
}

export default Board;
