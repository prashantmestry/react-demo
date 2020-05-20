import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import XLSX from 'xlsx';
import { Icon, Modal, Upload, Button } from 'antd';
import { excel_dum_json } from './excel_dum_json';

import GeneralTable from '../table/generaltable/GeneralTable';

// const ShowInModal = (props) => {

//     let actionHandler = () => {
//         props.toggleShow(false)
//     }

//     return (
//         <Modal
//             title='Excel Content'
//             visible={props.show}
//             onOk={actionHandler}
//             onCancel={actionHandler}
//             width='80%'
//             cancelButtonProps={null}
//         >
//             {props.children}
//         </Modal>
//     )
// }


const ExcelRead = () => {

    const [excelJson, setExcelJson] = useState(null);
    const [show, setShow] = useState(false);

    const [final, setFinal] = useState(null);


    useEffect(() => {

        //setExcelJson(excel_dum_json)
        let out = [];


        excel_dum_json.forEach(v1 => {

            let entity_data = v1['entity_data'];

            let year_array = [];
            entity_data.forEach(v => {
                v.frml_data.forEach(v => {
                    if (year_array.indexOf(v.rprt_date.substring(0, 10)) === -1) {
                        year_array.push(v.rprt_date.substring(0, 10));
                    }
                })
            });

            year_array.unshift('title');

            year_array.sort((a, b) => {
                if (a < b) { return 1 }
                else if (a > b) { return -1 }
                else { return 0 }
            });

            let final_year = year_array.map(v => {
                let obj = {};
                obj.Header = v;
                obj.accessor = v;
                obj.visible = true;
                obj.position = 'right';

                if (v == 'title') {
                    obj.position = 'left'
                }
                return obj;
            });

            //  

            let getFrmlValue = (frml_data, year_array) => {

                console.log('year_array :: ', year_array);

                let out_year_value = year_array.map(headObj => {

                    let obj = {};
                    obj[headObj] = '';

                    let node_exist = frml_data.find(frmlDataObj => headObj == frmlDataObj.rprt_date);

                    if (node_exist) {
                        obj[headObj] = node_exist.value;
                    }
                })
                return out_year_value;
            }



            let makeData = (data, new_temp_headerArray) => {
                let temp = {};
                new_temp_headerArray.forEach(v => {
                    let d = data.find(v1 => v1.rprt_date === v.accessor);

                    if (d) {
                        temp[v.accessor] = d.value;
                    } else {
                        temp[v.accessor] = 0;
                    }
                });
                return temp;
            }

            let body_temp = entity_data.map(v2 => {
                return {
                    ...makeData(v2.frml_data, final_year),
                    frml_id: v2.frml_id,
                    title: {
                        matched_frml_str: v2.matched_frml_str,
                        original_frml_str: v2.original_frml_str
                    }
                }
            })

            out.push({
                entity_type: v1.entity_type,
                header: final_year,
                body: body_temp
            })

        })

        setFinal(out);

        console.log('out', out);

    }, [])


    return (
        <div>

            <div style={{ display: 'flex', margin: '20px 0', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ color: '#fff', margin: '0 10px 0 10px', fontSize: '16px' }}>Upload File</h3>
                <Upload
                    onRemove={(file) => {
                        console.log('remove ', file);
                    }}

                    beforeUpload={() => {
                        console.log('before upload');
                    }}

                    onChange={(info) => {

                        console.log('on chagne ', info);
                        var f = info.file.originFileObj;

                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var data = e.target.result;
                            let readedData = XLSX.read(data, { type: 'binary', cellText: false, cellDates: true });
                            const wsname = readedData.SheetNames[0];
                            const ws = readedData.Sheets[wsname];
                            const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, dateNF: 'dd/mm/yyyy' });

                            setExcelJson(dataParse);
                            setShow(true);
                            console.log('dataParse ', dataParse);

                        }
                        reader.readAsBinaryString(f)
                    }}

                >
                    <Button> <Icon type="upload" /> Upload</Button>
                </Upload>

            </div>

            <div>
                {
                    (final && final.length > 0) && final.map((v, i) => {
                        return (
                            <GeneralBox key={i}>
                                <div className='org-detail'>
                                    <Icon type="desktop" className='ico' />{v.entity_type}
                                </div>
                                <GeneralTable
                                    headerData={v.header}
                                    bodyData={v.body}
                                    type='excel_table'
                                />
                            </GeneralBox>
                        )
                    })
                }
            </div>

        </div >
    )
}


let GeneralBox = styled.div`
    margin : 15px 0;
    .org-detail{
        padding : 10px;
        text-transform : uppercase;
        .ico{
            margin-right : 10px;
        }
    }
`;

export default ExcelRead;