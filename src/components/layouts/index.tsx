import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt, FaBoxOpen } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { BsBorderStyle } from 'react-icons/bs';
import { Logo, StyledLayout } from './style';

type Iprops = {
  children: JSX.Element;
};

const { Header, Content, Footer, Sider } = Layout;

const LayoutConfig = ({ children }: Iprops) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const location = useLocation();
  const menuItems = [
    {
      key: '/',
      label: <Link to="/">Cá nhân</Link>,
      icon: <FaUserAlt />,
    },
    {
      key: '/groups',
      label: <Link to="/groups">Quản lý đội nhóm</Link>,
      icon: <MdGroups />,
    },
    {
      key: '/products',
      label: <Link to="/products">Quản lý sản phẩm</Link>,
      icon: <FaBoxOpen />,
    },
    {
      key: '/orders',
      label: <Link to="/orders">Đơn hàng sỉ</Link>,
      icon: <BsBorderStyle />,
    },
  ];

  return (
    <StyledLayout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <Logo />
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px 16px' }}>{children}</Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Created by <b>No Bug, No Issue</b>
        </Footer> */}
      </Layout>
    </StyledLayout>
  );
};

export default LayoutConfig;
