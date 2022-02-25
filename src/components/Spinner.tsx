import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import spinner from "../assets/spinner.gif";
const  Spinner :React.FC = () => {

  return (
    <SpinnerElement >
        <img src={spinner} alt="" className="spinner" />
    </SpinnerElement >
);
};

export default Spinner;


const SpinnerElement = styled.div`
    
     

    .spinner{
        position: absolute;
        width: 8rem;
        top: 45%;
        left: 47%;
        z-index: 3;
        }
`