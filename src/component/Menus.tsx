import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useTranslation } from 'react-i18next';

export const Menus = () => {
  const { t } = useTranslation();
  return (
    <Menu theme='light' defaultSelectedKeys={['1']} mode='inline'>
      <Menu.Item key='1' icon={<PieChartOutlined />}>
        {t('menu.menu1')}
      </Menu.Item>
      <Menu.Item key='2' icon={<DesktopOutlined />}>
        {t('menu.menu2')}
      </Menu.Item>
      <SubMenu key='sub1' icon={<UserOutlined />} title={t('menu.user')}>
        <Menu.Item key='3'>{t('menu.addUser')}</Menu.Item>
        <Menu.Item key='4'>{t('menu.editUser')}</Menu.Item>
        <Menu.Item key='5'>{t('menu.deleteUser')}</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<TeamOutlined />} title={t('menu.team')}>
        <Menu.Item key='6'>{t('menu.addTeam')}</Menu.Item>
        <Menu.Item key='8'>{t('menu.deleteTeam')}</Menu.Item>
      </SubMenu>
      <Menu.Item key='9' icon={<FileOutlined />}>
        {t('menu.files')}
      </Menu.Item>
    </Menu>
  );
};
