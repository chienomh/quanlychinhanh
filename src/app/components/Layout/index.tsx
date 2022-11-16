import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Logo } from './styled';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const listMenuNav = [
  {
    key: '/',
    icon: React.createElement(UserOutlined),
    label: 'Cá nhân',
  },
  {
    key: '/quan-ly-nhom',
    icon: React.createElement(UserOutlined),
    label: 'Quản lý đội nhóm',
  },
  {
    key: '/quan-ly-san-pham',
    icon: React.createElement(UserOutlined),
    label: 'Quản lý sản phẩm',
  },
  {
    key: '/quan-ly-hoa-hong',
    icon: React.createElement(UserOutlined),
    label: 'Hoa hồng',
  },
];

type Iprops = {
  children: JSX.Element;
};

const LayoutApp = ({ children }: Iprops) => {
  const navigate = useNavigate();

  const [slKey, setSlKey] = useState<string[]>();

  const handleSelectedItem = ({ item, key, keyPath, selectedKeys }) => {
    console.log(keyPath, key, selectedKeys);
    setSlKey(selectedKeys);
    navigate(key);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Logo />
        {/* <Menu
          theme="dark"
          mode="inline"
          items={listMenuNav}
          selectedKeys={slKey}
          onSelect={handleSelectedItem}
        /> */}
        <Menu>
          <Menu.Item>
            <Link to="/">Cá nhân</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="quan-ly-nhom">Quản lý đội nhóm</Link>
          </Menu.Item>
          <Menu.SubMenu title="sub menu">
            <Menu.Item>item 3</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        ;
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
