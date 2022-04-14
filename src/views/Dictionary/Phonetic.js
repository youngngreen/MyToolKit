import React from 'react';

class Phonetic extends React.Component {

    render() {
        let { phonetics } = this.props;
        return (
            <>
                <h1>Phonetic</h1>
                {
                    phonetics.map((phonetic, index) => {
                        return (
                            <>
                                <div>
                                    {phonetic.text}
                                </div>
                                <audio controls>
                                    <source src={phonetic.audio} type="audio/mpeg" />
                                </audio>
                            </>
                        )
                    })
                }
            </>
        )
    }
}
export default Phonetic;