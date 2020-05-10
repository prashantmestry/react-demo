import React from 'react';
import styled from 'styled-components';

const PageTitle = (props) => {
    return (
        <H2Title>{props.children}</H2Title>
    )
}


let H2Title = styled.h2`
   border-bottom :1px solid #fff; 
   padding-bottom:10px;
   text-align :right;
   font-size : 20px;
`

export default PageTitle;