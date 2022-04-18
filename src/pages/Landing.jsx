import { Layout, Menu, Breadcrumb } from 'antd';
import DemoLayout from '../components/DemoLayout';

const { Header, Content, Footer } = Layout;

export default function Landing() {
    return (
        <DemoLayout page='Landing'>
            <div className='landing-content'>
                <h1 className='demo-heading'>
                    Welcome to the EPA SMaRT Search Redesign Prototype!
                </h1>
                <p className='demo-description'>
                    This tool is an interactive prototype which we will use to
                    conduct usability testing. This tool is <b>not</b> a fully
                    functional application, and its use is limited to two
                    predetermined scenarios. A member of our team will guide you
                    through the usability testing process, instructing you on
                    tasks to complete. After you have gone through the two
                    scenarios, you will be presented with a survey to complete.
                    Thank you for your participation!
                </p>
                <p className='demo-start-text'>
                    Please click "Start Demo" to begin.
                </p>
            </div>
        </DemoLayout>
    );
}
