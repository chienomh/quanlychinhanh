import { left } from 'inquirer/lib/utils/readline';
import styled from 'styled-components';

export const ImgProduct = styled('img')(() => ({
  width: '100px',
  height: '100px',
  borderRadius: '8px',
}));

export const WrapperAction = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
  '&>a:nth-child(2)': {
    borderLeft: '1px solid #bbb',
    borderRight: '1px solid #bbb',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}));
