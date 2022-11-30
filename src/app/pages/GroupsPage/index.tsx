import React from 'react';
import { Helmet } from 'react-helmet-async';
import Chart from './components/Chart';
import { Wrapper } from './style';

const GroupsPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Quản lý đội nhóm</title>
      </Helmet>
      <Chart />
    </Wrapper>
  );
};

export default GroupsPage;
