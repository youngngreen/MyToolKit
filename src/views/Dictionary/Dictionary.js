import React from 'react';
import Search from './Search';
import Phonetic from './Phonetic';
import Definition from './Definition';

class Dictionary extends React.Component {

    state = {
        word: "hello",
        phonetics: [
            {
                text: "həˈləʊ",
                audio: "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
            },
            {
                text: "hɛˈləʊ"
            }
        ],
        origin: "early 19th century: variant of earlier hollo ; related to holla.",
        meanings: [
            {
                partOfSpeech: "exclamation",
                definitions: [
                    {
                        definition: "used as a greeting or to begin a phone conversation.",
                        example: "hello there, Katie!",
                        synonyms: [],
                        antonyms: []
                    }
                ]
            },
            {
                partOfSpeech: "noun",
                definitions: [
                    {
                        definition: "an utterance of ‘hello’; a greeting.",
                        example: "she was getting polite nods and hellos from people",
                        synonyms: [],
                        antonyms: []
                    }
                ]
            },
            {
                partOfSpeech: "verb",
                definitions: [
                    {
                        definition: "say or shout ‘hello’.",
                        example: "I pressed the phone button and helloed",
                        synonyms: [],
                        antonyms: []
                    }
                ]
            }
        ]
    }

    updateDefinitionsAndPhonetics = (data) => {
        this.setState({...data});
    }

    render() {
        let {meanings} = this.state;
        return (
            <>
                <Search
                    updateUI={this.updateDefinitionsAndPhonetics}
                />
                <Phonetic
                    phonetics = {this.state.phonetics}
                />
                <Definition
                    meanings = {this.state.meanings}
                />
            </>
        )
    }
}
export default Dictionary;