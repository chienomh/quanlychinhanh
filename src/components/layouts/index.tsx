import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt, FaBoxOpen, FaSketch } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { Logo, StyledContent, StyledLayout } from './style';

type Iprops = {
  children: JSX.Element;
};

const { Header, Sider } = Layout;

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
      key: '/roses',
      label: <Link to="/roses">Hoa hồng</Link>,
      icon: <FaSketch />,
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
        <StyledContent style={{ margin: '16px 16px' }}>
          {children}
        </StyledContent>
      </Layout>
    </StyledLayout>
  );
};

export default LayoutConfig;
