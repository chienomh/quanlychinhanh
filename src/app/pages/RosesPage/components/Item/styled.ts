import styled from 'styled-components';

export const Wrapper = styled('div')(() => ({
  padding: '10px',
  display: 'flex',
  // alignItems: 'center',
  fontWeight: 600,
  gap: '20px',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

export const Index = styled('div')(() => ({
  fontWeight: 600,
  fontSize: '13px',
}));

export const CustomInput = styled('input')(() => ({}));
