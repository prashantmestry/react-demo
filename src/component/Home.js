import React, { useState, useEffect } from 'react';
//import DataTable from '../component/table/DataTable';
import DataTableFun from '../component/table/DataTableFun';
import RatioTable from '../component/table/ratioTable/RatioTable';
import Graph from '../component/common/chart/Graph';
import StatementList from './common/StatementList';
//import StatementType from './common/StatementType';
import StatementTypeFun from './common/StatementTypeFun';
import ExcelRead from '../component/excelread/ExcelRead';
import PageTitle from './common/PageTitle';
import { Button , Modal } from 'antd'

import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import './Home.css';

const Home = (props) => {

    useEffect(() => {
        props.setCompanyInfo({
            stmt_id: 'external',
            stmt_type: 'sa'
        })
    }, []);


    useEffect(() => {

        if ([1, 2, 4, 5].includes(props.stmt_id) && props.stmt_type) {
            props.getTableData({
                comp_id: 12234,
                schemaId: props.schema_id,
                stmtId: props.stmt_id,
                stmtType: props.stmt_type
            });
        }

        if (props.stmt_id && props.stmt_id === 'ratio_data') {
            console.log('other then finance data ==========');
            let data = { name: 'prashnt' }
            props.getRatioData(data);
        }

    }, [props.schema_id, props.stmt_id, props.stmt_type])

    console.log('home comp render');

    return (
        <>

            <div className='parent-section'>

                <div className='section-head'>
                    <PageTitle>Home  - {process.env.NODE_ENV}</PageTitle>
                </div>

                <div className='side-statement'>
                    <StatementList />
                    <Button style={{ marginBottom: '10px', width: '100%' }} variant="contained" color="primary"
                        onClick={() => props.getStatementType()}>Type</Button>
                    <StatementTypeFun />
                </div>

                <div className='side-display'>
                    {
                        props.stmt_id && [1, 2, 4, 5].includes(props.stmt_id) &&
                        <DataTableFun />
                    }
                    {
                        props.stmt_id && props.stmt_id === 'ratio_data' &&
                        <RatioTable />
                    }

                    {
                        props.stmt_id && props.stmt_id === 'fundware' &&
                        <div style={{ width : '100%' , margin : '0 auto'}}>
                            <Graph />
                        </div>
                    }

                    {
                        props.stmt_id && props.stmt_id === 'external' &&
                        <div>
                            <ExcelRead />                
                        </div>
                    }
                </div>

            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    let { stmt_id, stmt_type, schema_id } = state.finance;
    return {
        stmt_id, stmt_type, schema_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStatementType: () => dispatch(actions.getStatementType()),
        setCompanyInfo: (obj) => dispatch(actions.setCompanyInfo(obj)),
        getTableData: (obj) => dispatch(actions.getTableData(obj)),
        getRatioData: (obj) => dispatch(actions.getRatioData(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
