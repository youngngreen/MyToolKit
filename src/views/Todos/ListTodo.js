import React from 'react';
import AddToDo from './AddToDo';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' }
        ]
    }

    addItem = (item) => {
        this.setState({
            listTodo: [...this.state.listTodo, item]
        })
    }

    render() {
        let { listTodo } = this.state;
        return (
            <div>
                <AddToDo
                    addItem = {this.addItem}
                />
                <div>
                    {listTodo.map((item, index) => {
                        return (
                            <div>
                                <span>{index + 1} - {item.title}</span>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default ListTodo;