 import styled from 'styled-components';
const Wrap = styled.div`
.wrap-content { 
    background-color: #A8D6FD;
    width: 100% ;
    display: flex;
    flex-direction: column;
    border: 1px solid #BDCBD7;
    .wrap-logo {
        width: calc(100% - 160px) ;
        margin: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
} 

    @media only screen and (max-width: 192px) and (min-width: 50px) {

    .wrap-content {
        background-color: #A8D6FD;
        width: 100% ;
        display: flex;
        flex-direction: column;
        border: 1px solid #BDCBD7;
        .wrap-logo {
           
            margin: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    } 
}

    @media only screen and (max-width: 992px) and (min-width: 193px) {
        .wrap-content {
            background-color: #A8D6FD;
            width: 100% ;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            border: 1px solid #BDCBD7;
            .wrap-logo {
                width: calc(100% - 40px);
                margin: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        } 
    }
    @media only screen and (min-width: 993px) {
        .wrap-content {
            background-color: #A8D6FD;
            width: 100% ;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            border: 1px solid #BDCBD7;
            .wrap-logo {
                width: calc(100% - 60px) ;
                margin: 15px 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        } 
    }


`;

export {Wrap}
