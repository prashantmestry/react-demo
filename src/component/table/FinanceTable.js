import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import TableRow from './TableRow';
import './FinanceTable.css';
import { gray } from 'color-name';

const FinanceTable = (props) => {

    const [headerData, setHeaderData] = useState([]);
    const [bodyData, setBodyData] = useState([]);

    useEffect(() => {
        setHeaderData(props.headerData);
        setBodyData(props.bodyData);
    }, [props])


    return (
        <TableBox
            theme={{
                headerbg: '#02181f',
                tableBorder: '#022631',
                text: '#c5c5c5',
                darkColor: '#2dc5e8',
                trHover: '#021217'
            }}
            tableHeight='800px'

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
                                            <TableRow
                                                item={item}
                                                depth={0}
                                                key={i}
                                                show={item.displayElement}
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
    top: 0;            

    .date_box
    {
        display : block;        
        float:right;
        width : max-content;        
        padding : 10px;        
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
  }

  .table_scroll thead th:first-child,
  .table_scroll tfoot th:first-child {
    z-index: 5;
    background: ${props => props.theme.headerbg};       
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
    min-width: 350px;  
    color : ${ props => props.theme.darkColor};
    font-size:13px;
    font-weight : 400;
    padding-left : 10px;
  }
  
`;

export default FinanceTable;

