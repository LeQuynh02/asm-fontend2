import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

const MenuAdmin: React.FC = () => (
  <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
    <Menu.Item key="sub" icon={<AppstoreOutlined />} title="client">
      <NavLink className="nav-link active" aria-current="page" to="/">
        Trang chủ
      </NavLink>
    </Menu.Item>
    <Menu.Item key="sub1" icon={<AppstoreOutlined />} title="Dashboard">
      <NavLink className="nav-link active" aria-current="page" to="/admin">
        Dashboard
      </NavLink>
    </Menu.Item>
    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Quản lí danh mục">
      <Menu.Item key="8">
        <NavLink className="" aria-current="page" to="/admin/categories">
          Danh sách danh mục
        </NavLink>
      </Menu.Item>
      <Menu.Item key="9">
        <NavLink className="" aria-current="page" to="/admin/categories/add">
          Thêm mới danh mục
        </NavLink>
      </Menu.Item>
    </SubMenu>
    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Quản lí sản phẩm">
      <Menu.Item key="4">
        <NavLink className="" aria-current="page" to="/admin/products">
          Danh sách sản phẩm
        </NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink className="" aria-current="page" to="/admin/products/add">
          Thêm mới sản phẩm
        </NavLink>
      </Menu.Item>
    </SubMenu>
    <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Quản lí user">
      <Menu.Item key="2">
        <NavLink className="" aria-current="page" to="/admin/user">
          Danh sách user
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink className="" aria-current="page" to="/admin/user/add">
          Thêm mới user
        </NavLink>
      </Menu.Item>
    </SubMenu>
  </Menu>
);

export default MenuAdmin;
