import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setUsers(persons);
            })
    },[])

    return (
        <div>
            <h2>Home Users</h2>
            <Button variant="contained" color="primary">Hello World</Button>
            {
                users.map(person => {
                    return (
                        <div>{person.name}</div>
                    )
                })
            }

        </div>
    )
}


export default Home;
