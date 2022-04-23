import React from 'react';
import Favorite from './Favorite';
import Card from './Card';
import Search from './Search';
import API_KEY from './API_KEY.js';

class Weather extends React.Component {
    render() {
        return (
            <>
                <Search />
                <Card />
                <Favorite />
            </>
        )
    }
}
export default Weather;