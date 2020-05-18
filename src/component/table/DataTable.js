import React, { Component } from 'react';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    getTableData() {
        console.log('get table data fun *');

        this.props.getTableData({
            schema_id: 405
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps call', props, state);

        return null;

    }


    componentDidMount() {
        this.getTableData();
    }   



    render() {

        console.log('Data Table render');

        return (
            <div>

                {
                    this.props.dataLoading &&
                    <div className='table_loading'>Loading...</div>
                }

                {
                    this.props.dataError &&
                    <div className='table_error'>{this.props.dataError}</div>
                }

                {
                    (!this.props.dataLoading && !this.props.dataError) &&
                    <div>
                        {
                            this.props.tableData && this.props.tableData.map(v =>
                                <div key={v.age}>
                                    <div>{v.name}</div>
                                    <div>{v.age}</div>
                                </div>
                            )
                        }
                    </div>
                }

            </div>
        )
    }

}



const mapStateToProps = (state) => {
    let { stmt_id, stmt_type, schema_id, dataLoading, dataError, tableData } = state.finance;
    return {
        stmt_id, stmt_type, schema_id, 
        dataLoading, dataError, tableData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCompanyInfo: (obj) => dispatch(actions.setCompanyInfo(obj)),
        getTableData: (obj) => dispatch(actions.getTableData(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable); 