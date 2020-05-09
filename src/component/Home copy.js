import React, { useEffect, useState } from 'react';
import { getStatementList } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { Button } from 'antd';

const Home = () => {

    const [users, setUsers] = useState([]);

    const list = useSelector(state => {
        console.log('all state' , state);
        return state.finance.statement_list
    })
    const dispatch = useDispatch();

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             const persons = res.data;
    //             setUsers(persons);
    //         })
    // }, [])

    console.log('home comp render');

    return (
        <div>
            <h2>Home Users</h2>
            <Button type="primary" onClick={ () => dispatch(getStatementList())}>Hello World</Button>
            {
                users.map((person , index) => {
                    return (
                        <div key={index}>{person.name}</div>
                    )
                })
            }

        </div>
    )
}


export default Home;
