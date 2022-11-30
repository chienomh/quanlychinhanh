import { Layout } from 'antd';
import styled from 'styled-components';

export const Logo = styled.div`
  height: 28px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100vw;
`;

export const StyledContent = styled(Layout.Content)`
  overflow: scroll;
  padding: 16px;

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #66beff;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #66beff;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
`;
