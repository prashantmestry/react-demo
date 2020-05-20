import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const RowDisplay = (props) => {

    return (
        <tr>
            {
                props.headerArrayData && props.headerArrayData.map(v => {

                    if (v.position == 'left') {
                        return (
                            <th key={v.accessor}>
                                <div
                                    style={{
                                        textAlign: 'left',
                                        margin: '5px',
                                        cursor: `${(props.item.children && props.item.children.length > 0) ? 'pointer' : 'auto'}`,
                                        width: '100%', paddingLeft: `${props.depth * 15}px`,
                                    }}>
                                    {
                                        props.type && props.type == 'excel_table' ? (
                                            <FrmlStrSelect
                                                style={{ width: 220 }}
                                                defaultValue={props.item[v.accessor].matched_frml_str}

                                                onChange={(v) => console.log('val ', v)}>
                                                {
                                                    Object.keys(props.item[v.accessor]).map(v1 => {
                                                        return (
                                                            <Option key={props.item[v.accessor][v1]}
                                                                value={props.item[v.accessor][v1]}>
                                                                {props.item[v.accessor][v1]}
                                                            </Option>
                                                        )
                                                    })
                                                }
                                            </FrmlStrSelect>
                                        )
                                            :
                                            props.item[v.accessor]
                                    }
                                </div>
                            </th>
                        )
                    }
                    return (
                        <td key={v.accessor}>
                            <div
                                style={{
                                    textAlign: 'right',
                                    padding: '8px 10px 8px 10px',
                                }}>
                                {
                                    props.item[v.accessor]
                                }
                            </div>
                        </td>
                    )
                })
            }
        </tr>
    )

}

let FrmlStrSelect = styled(Select)`


color : #fff;
height:27px;

.ant-select-selection
{
    background : none;
    border : none;
    outline : none;
}
.ant-select-arrow{
    color : #fff;
}



`;

export default RowDisplay;
