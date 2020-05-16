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
        <div>
            <PageTitle>Home</PageTitle>

            <StatementList />

            <Button style={{ marginBottom: '10px'  }} variant="contained" color="primary"
                onClick={() => props.getStatementType()}>Type</Button>

            <StatementType />

            <StatementTypeFun />

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
