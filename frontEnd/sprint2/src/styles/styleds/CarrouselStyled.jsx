import styled from 'styled-components';

export const CarrouselContainer = styled.section `
    display:grid;
    //background-color: aqua;    
    width: 100%;
    //height: 100%;
    height: 303px;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 100%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    .carrouselImg1 {
        grid-area: 1/1/2/2;  
    }
    .carrouselImg2 {
        grid-area: 1/2/2/3;  
    }
    .carrouselImg3 {
        grid-area: 1/3/2/4;  
    }
`