import { Layout, Menu, Breadcrumb, PageHeader, Button, Tooltip } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default function DemoLayout(props) {
    let navigate = useNavigate();
    return (
        <Layout className='layout' style={{ height: '100%' }}>
            {props.page === 'Landing' ? (
                <PageHeader
                    className='site-page-header'
                    title={'EPA SMaRT Search Usability Testing'}
                />
            ) : (
                <PageHeader
                    className='site-page-header'
                    onBack={() => navigate(-1)}
                    title={props.page}
                />
            )}
            <Content style={{ padding: '0 50px' }}>
                <div className='site-layout-content'>{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                {props.page === 'Landing' ? (
                    <Tooltip title='Go to the first scenario'>
                        <Button
                            icon={<ArrowRightOutlined />}
                            onClick={() => navigate('/scenario-1')}
                        >
                            Start Demo
                        </Button>
                    </Tooltip>
                ) : props.page === 'Scenario 1' ? (
                    <Tooltip title='Go to the next scenario'>
                        <Button
                            icon={<ArrowRightOutlined />}
                            onClick={() => navigate('/scenario-2')}
                        >
                            Next Scenario
                        </Button>
                    </Tooltip>
                ) : props.page === 'Scenario 2' ? (
                    <Tooltip title='Complete Demo Survey'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSegpHjNkQe5_B463zkAS6e1G4Q2IyGwgn1lA2kMb_KfS2Jf8w/viewform?usp=sf_link'>
                            <Button icon={<ArrowRightOutlined />}>
                                Survey
                            </Button>
                        </a>
                    </Tooltip>
                ) : (
                    <Tooltip title='Return to Demo Homepage and start over'>
                        <Button onClick={() => navigate('/')}>
                            Start Over
                        </Button>
                    </Tooltip>
                )}
            </Footer>
        </Layout>
    );
}
