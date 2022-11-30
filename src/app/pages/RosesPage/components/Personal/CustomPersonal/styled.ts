import styled from 'styled-components';

export const Wrapper = styled('div')(() => ({
  width: '100%',
  border: '1px solid black',
}));

export const Header = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.blueColor,
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white',
}));

export const Title = styled('div')(() => ({
  fontSize: '16px',
  fontWeight: 600,
}));

export const WrapperSearch = styled('div')(() => ({
  padding: '10px',
  display: 'flex',
  gap: '20px',
  justifyContent: 'flex-end',
}));
