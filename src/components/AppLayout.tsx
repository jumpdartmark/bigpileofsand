import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import styles from './AppLatout.module.scss';

const {
  Header, Content, Footer, Sider,
} = Layout;

const AppLayout: React.FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout>
      <Sider className={styles.sider} collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content className={styles.content}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <div className={styles.whatever}>
              whatever
            </div>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
