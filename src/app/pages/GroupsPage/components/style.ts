import styled from 'styled-components';

export const StyledCard = styled.div`
  display: inline-block;
  width: 200px;
  text-align: center;
  min-height: 240px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-top: 15px;
    border: 1px solid #ccc;
  }

  .spanName {
    font-weight: bold;
    margin-top: 18px;
    font-size: 16px;
  }
  .spanPositon {
    margin-bottom: 20px;
  }
  .spanDesc {
  }
`;
