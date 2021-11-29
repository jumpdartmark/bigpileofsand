import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import styles from './AppLayout.module.scss';

import { routes, defaultRoute } from '../routes';

const {
  Content, Sider,
} = Layout;

const AppLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  console.warn(routes.map((r) => r.route));
  return (
    <Layout>
      <Sider className={styles.sider} collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.key]} onClick={(mi) => { navigate(mi.key); }}>
          {
            routes.map((rt) => {
              const ThisIcon = rt.icon;
              return <Menu.Item key={rt.route} icon={<ThisIcon />}>{rt.title}</Menu.Item>;
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content className={styles.content}>
          <Routes>
            {
              routes.map((rt) => (
                <Route key={rt.route} path={rt.route} element={rt.element({})} />
              ))
            }
            <Route key="*" path="*" element={defaultRoute.element({})} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
