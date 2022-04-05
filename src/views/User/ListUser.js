import React from 'react';
import axios from 'axios';

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        console.log(res)
    }


    render() {
        let { listUser } = this.state;
        return (
            <div>
                <h1>List of User</h1>
                <div>
                    {listUser.map((item, index) => {
                        return (
                            <div>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListUser;