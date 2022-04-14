import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    state = {
        word: "hello"
    }

    changeWord = (event) => {
        this.setState({
            word: event.target.value
        })
    }

    fechDefinition = async (event) => {
        event.preventDefault();
        const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
        const wordToDefine = this.state.word;
        try {
            const response = await axios.get(`${api}${wordToDefine}`);
            const data = response.data;
            this.props.updateUI(data[0]);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.word}
                    onChange={this.changeWord}
                />
                <button
                    onClick={this.fechDefinition}
                >
                    Search
                </button>
            </>
        )
    }
}
export default Search;