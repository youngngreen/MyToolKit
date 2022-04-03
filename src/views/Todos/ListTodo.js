import React from 'react';
import AddToDo from './AddToDo';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }

    addItem = (item) => {
        this.setState({
            listTodo: [...this.state.listTodo, item]
        })
    }

    handleDelete = (del_item) => {
        let currentList = this.state.listTodo;
        currentList = currentList.filter(item => item.id !== del_item.id)
        this.setState({
            listTodo: currentList
        })
    }

    handleEdit = (edit_item) => {
        let {editTodo, listTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // save
        if (isEmptyObj === false && editTodo.id === edit_item.id){
            
            let copyList = [...listTodo];
            
            let objIndex = copyList.findIndex((item => item.id === edit_item.id));
            
            copyList[objIndex].title = editTodo.title;

            this.setState({
                listTodo: copyList,
                editTodo: {}
            })
            return;
        }

        // edit
        this.setState({
            editTodo: edit_item
        })
    }

    handleOnchangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div>
                <AddToDo
                    addItem = {this.addItem}
                />
                <div>
                    {listTodo.map((item, index) => {
                        return (
                            <div>
                                {isEmptyObj === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input value={editTodo.title}
                                                onChange={(event) => this.handleOnchangeEdit(event)}
                                                />
                                            </span>
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                    </>
                                }
                                <button onClick={() => this.handleEdit(item)}>
                                    {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button onClick={() => this.handleDelete(item)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default ListTodo;