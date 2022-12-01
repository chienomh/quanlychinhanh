import styled from 'styled-components';

export const InforProduct = styled('div')(() => ({
  fontSize: '18px',
}));

export const WrapperInfor = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  fontWeight: 500,
}));

export const CustomImg = styled('img')(() => ({
  width: '150px',
  height: '150px',
  borderRadius: '8px',
}));

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Label = styled('label')(() => ({
  fontSize: '16px',
  fontWeight: 500,
}));

export const WrapperPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
