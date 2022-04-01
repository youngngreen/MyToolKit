import React from 'react';
import logo from '../../assets/images/logo.png';

class Home extends React.Component {
    render () {
        return (
            <>
            <div>
                Welcome to Homepage
            </div>
            <div>
                <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }}/>
            </div>
            </>
        )
    }
}

export default Home;