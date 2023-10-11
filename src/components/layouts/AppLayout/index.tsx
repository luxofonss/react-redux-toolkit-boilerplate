import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'

const { Header, Sider, Content } = Layout

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const themee = theme.useToken()
  console.log('themee:: ', themee)

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme='light' trigger={null} width={250} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical'>iKame</div>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['1']}
          onSelect={(item) => console.log('item:: ', item)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
              danger: true
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
