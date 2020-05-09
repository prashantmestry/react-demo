import React, { useEffect, useState } from 'react';
import { getStatementList } from '../redux/actions';
import { connect } from 'react-redux';
import  Button from '@material-ui/core/Button';

const Home = (props) => {

    const [users, setUsers] = useState([]);

    // const list = useSelector(state => {
    //     console.log('all state' , state);
    //     return state.finance.statement_list
    // })
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             const persons = res.data;
    //             setUsers(persons);
    //         })
    // }, [])

    useEffect(() =>{
        props.getStatementList()
    },[]);

    useEffect(() => {
        console.log('props change in home comp');
        console.log(props);
    }, [props]);

    console.log('home comp render');

    return (
        <div>
            <h2>Home Users</h2>
            {
                props.statementList.map(v => {
                    return(
                        <li key={v.id}>{v.name}</li>
                    )
                })
            }
            <Button variant="contained" color="primary" onClick={() => props.getStatementList()}>Hello World</Button>
            {
                users.map((person, index) => {
                    return (
                        <div key={index}>{person.name}</div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        statementList: state.finance.statement_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatementList: () => dispatch(getStatementList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
