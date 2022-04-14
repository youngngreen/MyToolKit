import React from 'react';

class Definition extends React.Component {
    render() {
        let { meanings } = this.props;
        return (
            <>
                <div>
                    <h1>Definitions</h1>
                </div>

                <div>
                    {
                        meanings.map((meaning, index) => {
                            return (
                                <div>
                                    <p>{meaning.partOfSpeech}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </>
        )
    }
}
export default Definition;