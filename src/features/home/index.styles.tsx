import styled from 'styled-components';


const Wrap = styled.div`
    background-color: #2699FB; 
    height: calc(100vh - 65px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .large-title {
      font-size: 45px;
      font-weight: bold;
    }
    .small-title {
      font-size: 11px;
    }
    .description {
      font-size: 12px;
      font-weight: normal;
    }
    @media only screen and (max-width: 192px) and (min-width: 50px) {

    .wrap-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
     
    } 
}

    @media only screen and (max-width: 992px) and (min-width: 193px) {
        .wrap-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        } 
    }
    @media only screen and (min-width: 993px) {
        .wrap-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        } 
        .image-size {
          width: 200px;
          height: 121px;
        }
    }


`;

export {Wrap}
