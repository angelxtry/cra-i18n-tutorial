import { Layout, PageHeader, Tag } from 'antd';

import { LocaleSelector } from './LocaleSelector';
import { Menus } from './Menus';

const { Sider, Content } = Layout;

export const DefaultLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ backgroundColor: 'white' }}>
        <div className='logo' />
        <Menus />
      </Sider>
      <Layout className='site-layout'>
        <PageHeader
          title='Title'
          subTitle='This is a subtitle'
          tags={<Tag color='blue'>Running</Tag>}
          extra={[<LocaleSelector key='locale-selector' />]}
        />
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
