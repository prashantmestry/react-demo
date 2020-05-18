import React, { useEffect, useState } from 'react';
import GeneralTable from '../generaltable/GeneralTable';
import { roundNumber } from '../../../util';

import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';

const RatioTable = (props) => {

    const [headerData, setHeaderData] = useState([]);
    const [bodyData, setBodyData] = useState([]);


    useEffect(() => {

        if (!props.ratioDataLoading && !props.ratioDataError && props.ratioData) {

            let temp_headerArray = [];
            props.ratioData.data.forEach(v => {
                v.ratioValue.forEach(v1 => {
                    if (temp_headerArray.indexOf(v1.date.substring(0, 10)) === -1) {
                        temp_headerArray.push(v1.date.substring(0, 10));
                    }
                });
            });

            // Convert header array into object using 'key' as index.
            temp_headerArray.sort((a, b) => {
                if (a > b) {
                    return -1;
                }
                else if (a < b) {
                    return 1;
                }
                else {
                    return 0;
                }
            });

            temp_headerArray.unshift('Action');
            temp_headerArray.unshift('Name');

            /*
            * Create Header Array
            */

            let headers = temp_headerArray.map((v, i) => {
                let obj = {};
                obj.Header = v;
                obj.accessor = v;
                obj.width = 150;
                obj.visible = true;                                                

                if (v.toLowerCase() == 'name') {
                    obj.position = 'left';
                    obj.width = 200;                                        
                    obj.sortable = true;                    
                }
                if (v.toLowerCase() === 'action') {
                    obj.position = 'left';
                    obj.width = 80;
                    obj.style = {
                        textAlign: 'center',
                        fontWeight: '200',
                    };
                    obj.Cell = row => {
                        return (
                            <span>Bar</span>
                        )
                    }
                }
                return obj;
            });


            /*
            * Create Body Array
            */

            let makeData = null;

            makeData = (data, new_temp_headerArray) => {
                let temp = {};
                new_temp_headerArray.forEach(v => {
                    let d = data.find(v1 => v1.date.substring(0, 10) === v.accessor);
                    if (d) {                        
                        temp[v.accessor] =  roundNumber(d.data.value);
                    } else {
                        temp[v.accessor] = 0;
                    }
                });
                return temp;
            }

            let bodyD = props.ratioData.data.map(v => {
                return {
                    ...makeData(v.ratioValue, headers),
                    Name: v.ratioShortName ? v.ratioShortName : v.ratioKey
                    //Name: v.ratioShortName
                }
            });

            console.log('ratio data');
            console.log(headers);
            console.log(bodyD);

            setHeaderData(headers);
            setBodyData(bodyD);

        }
        else {
            setHeaderData([]);
            setBodyData([]);
        }

    }, [props.ratioDataLoading, props.ratioDataError, props.ratioData]);


    return (
        <div>

            {
                props.ratioDataLoading &&
                <div className='table_loading'>Ratio Loading...</div>
            }

            {
                props.ratioDataError &&
                <div className='table_error'>{props.ratioDataError}</div>
            }

            {
                (!props.ratioDataLoading && !props.ratioDataError) &&
                <>
                    {
                        (headerData.length > 0 && bodyData.length > 0) &&
                        <GeneralTable
                            headerData={headerData}
                            bodyData={bodyData}
                        />
                    }

                </>
            }

        </div >
    )
}

const mapStateToProps = (state) => {
    let { ratioDataLoading, ratioDataError, ratioData } = state.ratio;
    return {
        ratioDataLoading, ratioDataError, ratioData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRatioData: (obj) => dispatch(actions.getRatioData(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatioTable); 
