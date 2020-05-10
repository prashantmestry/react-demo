import React, { useEffect } from 'react';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import PageTitle from './common/PageTitle';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const HomeFun = (props) => {

    useEffect(() => {
        props.getStatementList();
    }, []);


    let setInfoStmtId = (id) => {
        console.log('stmt id ', id);
        props.setCompanyInfo({ ...props.company, stmt_id: id });
    }

    let setInfoStmtType = (id) => {
        console.log('stmt type ', id);
        props.setCompanyInfo({ ...props.company, stmt_type: id });
    }

    console.log('home fun comp render');

    return (
        <div>
            <PageTitle>Home Fun</PageTitle>
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
                                        onClick={() => setInfoStmtId(v.id)}>{v.name}
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
                                        onClick={() => setInfoStmtType(v.id)}>
                                        {v.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                }

            </List>

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
    let { statement_list, statement_type, stmt_id, stmt_type } = state.finance;
    return { statement_list, statement_type, stmt_id, stmt_type }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatementList: () => dispatch(actions.getStatementList()),
        getStatementType: () => dispatch(actions.getStatementType()),
        setCompanyInfo: (obj) => dispatch(actions.setCompanyInfo(obj))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeFun);
