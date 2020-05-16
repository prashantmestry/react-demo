import React, { useState, useEffect } from 'react';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import StatementList from './common/StatementList';
import StatementType from './common/StatementType';
import StatementTypeFun from './common/StatementTypeFun';
import PageTitle from './common/PageTitle';
import Button from '@material-ui/core/Button';

const Home = (props) => {

    const [users, setUsers] = useState([]);

    console.log('home comp render');

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            Env : { process.env.NODE_ENV }
            <PageTitle>Home</PageTitle>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>

                <div>
                    <StatementList />
                    <Button style={{ marginBottom: '10px' }} variant="contained" color="primary"
                        onClick={() => props.getStatementType()}>Type</Button>
                    <StatementType />
                    <StatementTypeFun />
                </div>

                <div style={{ border: '1px solid #032531', width: '100%', borderTop: 'none' , marginLeft : '10px' }}>
                    
                </div>

            </div>
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


const mapStateToProps = (state) => {
    let { company } = state.finance;
    return {
        company
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getStatementList: () => dispatch(actions.getStatementList()),
        getStatementType: () => dispatch(actions.getStatementType()),
        setCompanyInfo: (obj) => dispatch(actions.setCompanyInfo(obj))
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home));
