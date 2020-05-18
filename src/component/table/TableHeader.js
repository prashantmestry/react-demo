import React from 'react';

export const TableHeader = ({ headerArrayData }) => {

    return (
        <tr>
            {
                headerArrayData.length > 0 && headerArrayData.map((obj, i) => {

                    if (obj.visible) {
                        return (
                            <th scope='col'
                                key={i}>
                                <div className='date_box'>
                                    {obj.Header}
                                </div>
                            </th>
                        )
                    }
                })
            }
        </tr>
    )
}
