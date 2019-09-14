import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from "react";
// @ts-ignore
import { renderRoutes } from "react-router-config";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export interface Props {
  route:any,
  history:any
}

interface State {

}

class Main extends React.Component<Props, State> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onSelect(param:any){
    console.log(param)
    this.props.history.push(`/main/${param.key}`)
  }

  render() {
    const {routes} = this.props.route
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={(param)=>{this.onSelect(param)}}>
            <Menu.Item key="NotesManagement">
              <Icon type="pie-chart" />
              <span>笔记</span>
            </Menu.Item>
            <Menu.Item key="UsersManagement">
              <Icon type="pie-chart" />
              <span>用户</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {renderRoutes(routes)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>mangostreet ©2019 Created by Allen Zhang</Footer>
        </Layout>
      </Layout>
    );
  }
  componentDidMount(): void {
  }
}

export default Main
