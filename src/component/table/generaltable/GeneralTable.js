import React, { useState, useEffect } from 'react';
import { TableHeader } from '../TableHeader';
import RowDisplay from './RowDisplay';
import styled from 'styled-components';

const GeneralTable = (props) => {

    const [headerData, setHeaderData] = useState([]);
    const [bodyData, setBodyData] = useState([]);

    useEffect(() => {
        setHeaderData(props.headerData);
        setBodyData(props.bodyData);
    }, [props.headerData , props.bodyData]);


    return (
        <TableBox
            theme={{
                headerbg: '#02181f',
                tableHeight: '700px',
                tableBorder: '#022631',
                text: '#c5c5c5',
                darkColor: '#2dc5e8',
                trHover: '#021217'
            }}
        >
            <div className='table_scroll'>
                {
                    <table className='finance_table'>
                        <thead>                            
                            <TableHeader
                                headerArrayData={headerData}
                            />
                        </thead>
                        <tbody>
                            {
                                bodyData.length > 0 ?
                                    bodyData.map((item, i) => {
                                        return (
                                            <RowDisplay
                                                item={item}
                                                depth={0}
                                                key={i}                                                
                                                headerArrayData={headerData}
                                            />
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan={headerData.length}>No Record  Found</td>
                                    </tr>
                            }
                            
                        </tbody>
                    </table>
                }
            </div>
        </TableBox>
    )
}



let TableBox = styled.div`
background: ${props => props.theme.bg};
border-radius: 5px;
font-size:12px;
color : ${props => props.theme.text};


.table_scroll {
    position: relative;
    width:100%;
    z-index: 1;
    margin: auto;
    overflow: auto;
    height: ${ props => props.tableHeight};
    border :  1px solid  ${props => props.theme.tableBorder};
  }
  .table_scroll table {
    width: 100%;    
    margin: auto;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  .table_scroll th,
  .table_scroll td {
    border-bottom : 1px solid  ${props => props.theme.tableBorder};
    border-right : 1px solid  ${props => props.theme.tableBorder};
    vertical-align: top;        
    text-align : right;
    vertical-align: middle;
  }
  .table_scroll thead th , .table_scroll tfoot th {
    background: ${props => props.theme.headerbg};    
    color: ${ props => props.theme.text};    
    color : ${ props => props.theme.darkColor};
    position: -webkit-sticky;
    position: sticky;
    text-align : webkit-right;
    font-weight : 100;
    top: 0;            

    .date_box
    {
        display : block;        
        float:right;
        width : max-content;        
        padding : 10px;
        font-weight: 600;        
    }
  }
  
  .table_scroll tfoot,
  .table_scroll tfoot th,
  .table_scroll tfoot td {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;    
    color: ${ props => props.theme.text};
    z-index:4;        
  }
  
  .table_scroll th:first-child {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 2;
    background: none;    
  }

  .table_scroll tbody th:first-child {
      background : ${props => props.theme.headerbg};      
      color : ${ props => props.theme.darkColor}
      font-weight : 100;
      padding-left:5px;
  }

  .table_scroll thead th:first-child,
  .table_scroll tfoot th:first-child {
    z-index: 5;
    background: ${props => props.theme.headerbg};    
    font-weight : 100;
  }

  .table_scroll tbody tr {
      : hover
      {
        background: ${props => props.theme.trHover};                
        th {           
            background: ${props => props.theme.trHover};
        }
      }
  }

  .table_scroll tr th:first-child{
    min-width: 200px;  
    color : ${ props => props.theme.darkColor};
    font-size:13px;
  }
  
`;


export default GeneralTable;