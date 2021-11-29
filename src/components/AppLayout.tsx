import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import styles from './AppLayout.module.scss';

import { routes, defaultRoute } from '../routes';

const {
  Header, Content, Footer, Sider,
} = Layout;

const AppLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const location = useLocation();
  // eslint-disable-next-line no-console
  console.warn(location);

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout>
      <Sider className={styles.sider} collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.key]}>
          {
            routes.map((rt) => {
              const ThisIcon = rt.icon;
              return <Menu.Item key={rt.route} icon={<ThisIcon />}>{rt.title}</Menu.Item>;
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content className={styles.content}>
          <Routes>
            {
              routes.map((rt) => (
                <Route key={rt.route} path={rt.route} element={rt.element({})} />
              ))
            }
            <Route key="/" path="/" element={defaultRoute.element({})} />
            <Route key="*" path="*" element={defaultRoute.element({})} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
