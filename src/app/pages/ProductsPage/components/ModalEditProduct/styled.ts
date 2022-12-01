import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  .content-img {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > img {
      width: 150px;
      height: 150px;
    }
  }
`;
