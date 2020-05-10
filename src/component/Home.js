import React, { useEffect, useState, useMemo } from 'react';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import PageTitle from './common/PageTitle';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


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

    useEffect(() => {
        props.getStatementList();
        //props.getStatementType();
    }, []);


    let setCompanyData = (info) => {
        console.log('info ', info);
        props.setCompanyInfo({ ...props.company, ...info });
    }

    console.log('home comp render');

    return (
        <div>
            <PageTitle>Home Users {props.stmt_id} : {props.stmt_type}</PageTitle>
            <List>
                {
                    props.statement_list &&
                    <ul>
                        {
                            props.statement_list.map(v => {
                                return (
                                    <li
                                        className={props.stmt_id && props.stmt_id == v.id ? 'active' : null}
                                        key={v.id}
                                        onClick={() => setCompanyData({ stmt_id: v.id })}>{v.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                <Button style={{ marginBottom: '10px' }} variant="contained" color="primary" onClick={() => props.getStatementType()}>Type</Button>
                {
                    props.statement_type &&
                    <ul>
                        {
                            props.statement_type.map(v => {
                                return (
                                    <li
                                        className={props.stmt_type && props.stmt_type == v.id ? 'active' : null}
                                        key={v.id}
                                        onClick={() => setCompanyData({ stmt_type: v.id })}>{v.name}</li>
                                )
                            })
                        }
                    </ul>
                }

            </List>

            {
                users.map((person, index) => {
                    return (
                        <div key={index} >{person.name}</div>
                    )
                })
            }
        </div>
    )
}

let List = styled.div`
    display : flex;
    flex-direction : column;
    width:150px;
    margin-top : 10px;
    justify-content : center;    

    ul{
        border : 1px solid #2ec5e8;
        padding:5px;
        border-radius : 5px;
    }
    ul:first-child{        
        margin-bottom:20px;        
    }

    li {        
        padding:10px;
        border-bottom : 1px solid rgba(255,255,255,.1);
        color : #777;
        font-size:15px;     
        
        :hover{
            color : #2ec5e8;
            cursor : pointer;            
            border-bottom : 1px solid #2ec5e8;
            padding-left:12px;
            transition : all .3s;
        }
    }
    li.active { 
        color : #2ec5e8;
        border-bottom : 1px solid #2ec5e8;
    }   
    li:last-child{    
    border-bottom:none;
    }
`;

const mapStateToProps = (state) => {
    let { statement_list, statement_type, stmt_id, stmt_type, company } = state.finance;
    return {
        statement_list, statement_type, stmt_id, stmt_type, company
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatementList: () => dispatch(actions.getStatementList()),
        getStatementType: () => dispatch(actions.getStatementType()),
        setCompanyInfo: (obj) => dispatch(actions.setCompanyInfo(obj))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home));
