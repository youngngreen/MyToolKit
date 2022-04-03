import React from 'react';

class AddToDo extends React.Component {

    state = {
        title: ''
    }

    
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddToDo = () => {
        let item = {
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }

        this.props.addItem(item);
        
        this.setState({
            title: ''
        })
    }


    render () {
        let {title} = this.state;
        return (
            <div>
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button"
                    onClick={() => this.handleAddToDo()}
                >
                    Add
                </button>
            </div>
        )
    }
}
export default AddToDo;