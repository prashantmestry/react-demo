import React, { useEffect } from 'react';
import styled from 'styled-components';

const RowDisplay = (props) => {

    useEffect(() => {
        console.log('body ', props);
    }, [])

    return (
        <tr>
            {
                props.headerArrayData && props.headerArrayData.map(v => {

                    if (v.position == 'left') {
                        return (
                            <th>
                                <div
                                    style={{
                                        textAlign: 'left',
                                        margin: '5px',
                                        cursor: `${(props.item.children && props.item.children.length > 0) ? 'pointer' : 'auto'}`,
                                        width: '100%', paddingLeft: `${props.depth * 15}px`
                                    }}>
                                    {
                                        props.item[v.accessor]
                                    }
                                </div>
                            </th>
                        )
                    }
                    return (
                        <td>
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




export default RowDisplay;
