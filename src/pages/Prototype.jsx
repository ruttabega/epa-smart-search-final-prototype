import SmartSearch from '../components/SmartSearch';
import { Typography } from 'antd';

export default function Prototype() {
    return (
        <div className='page'>
            <Typography.Title className='page-title'>
                EPA Science Models and Research Tools (SMaRT) Search
            </Typography.Title>
            <SmartSearch />
        </div>
    );
}
