import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs } from 'antd';

import Group from './components/Group';
import Personal from './components/Personal';

const OrdersPage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Helmet>
        <title>Hoa hồng</title>
      </Helmet>
      <Tabs defaultActiveKey="1" type="card" size="middle">
        <Tabs.TabPane tab="Cá nhân" key={1} style={{ padding: '10px' }}>
          <Personal />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Nhóm" key={2}>
          <Group />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
