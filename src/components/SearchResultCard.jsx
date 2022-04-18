import { useState } from 'react';
import { Card, Button, Row, Col, Table } from 'antd';
import {
    BookOutlined,
    BookFilled,
    CaretUpFilled,
    CaretDownFilled
} from '@ant-design/icons';

import Bookmark from './Bookmark';

const Tag = ({ keyword, location }) => {
    return location === 'tag-table' ? (
        <Button size='small' className={'tag-table-' + keyword.type}>
            {keyword.title}
        </Button>
    ) : (
        <Button size='small' className={keyword.type}>
            {keyword.title}
        </Button>
    );
};

const TechSupport = ({ techSupport }) => {
    return (
        <table className='tech-support'>
            <tbody>
                <tr className='tech-support-row'>
                    <th className='tech-support-label'>Technical Support</th>
                    <td className='tech-support-data-item'>
                        {techSupport.name}
                    </td>
                    <td className='tech-support-data-item'>
                        {techSupport.number}
                    </td>
                    <td className='tech-support-data-item'>
                        {techSupport.email}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const TagTable = ({ tags }) => {
    const columns = [
        {
            title: 'Primary Audience',
            dataIndex: 'primaryAudience'
        },
        {
            title: 'Secondary Audience',
            dataIndex: 'secondaryAudience'
        },
        {
            title: 'Environmental Topic Areas',
            dataIndex: 'environmentalTopicArea'
        },
        {
            title: 'Platform',
            dataIndex: 'platform'
        },
        {
            title: 'Scientific Application Type',
            dataIndex: 'scientificApplicationType'
        }
    ];

    const data = {
        primaryAudience: tags.filter(tag => tag.type === 'primaryAudience'),
        secondaryAudience: tags.filter(tag => tag.type === 'secondaryAudience'),
        environmentalTopicArea: tags.filter(
            tag => tag.type === 'environmentalTopicArea'
        ),
        platform: tags.filter(tag => tag.type === 'platform'),
        scientificApplicationType: tags.filter(
            tag => tag.type === 'scientificApplicationType'
        )
    };
    console.log(tags);
    console.log(data[columns[4].dataIndex]);

    return (
        <table className='tag-table-table'>
            <tbody className='tag-table'>
                {columns.map(column => (
                    <tr className='tag-table-row'>
                        <th className='tag-table-head'>{column.title}</th>
                        <td className='tag-table-data'>
                            {data[column.dataIndex][0] ? (
                                <Tag
                                    keyword={data[column.dataIndex][0]}
                                    location='tag-table'
                                />
                            ) : (
                                'N/A'
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function SearchResultCard({ result, bookmarks, setBookmarks }) {
    console.log(result);
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <Card className='result-card' key={result.id}>
            <Row>
                <a href={result.link} className='result-card-name'>
                    {result.name}
                </a>
                <Button
                    type='text'
                    icon={
                        bookmarks.has(result.name) ? (
                            <BookFilled />
                        ) : (
                            <BookOutlined />
                        )
                    }
                    className='bookmark'
                    onClick={async () => {
                        console.log(bookmarks);
                        if (bookmarks.has(result.name)) {
                            let newBookmarks = new Map(bookmarks);
                            newBookmarks.delete(result.name);
                            await setBookmarks(newBookmarks);
                            console.log('deleted');
                        } else {
                            let newBookmarks = new Map(bookmarks);
                            newBookmarks.set(result.name, result);
                            await setBookmarks(newBookmarks);
                            console.log('added');
                        }
                    }}
                />
                <Button
                    type='text'
                    className='collapse-button'
                    onClick={() => setIsOpen(!isOpen)}
                    icon={isOpen ? <CaretUpFilled /> : <CaretDownFilled />}
                />
            </Row>
            <Row>
                <Col span={15}>
                    <p className='result-card-description-open'>
                        {result.description}
                    </p>
                    <p className='result-card-disclaimer'>
                        {result.disclaimer}
                    </p>
                    <TechSupport techSupport={result.techSupport} />
                </Col>
                <Col span={9}>
                    <TagTable tags={result.keywords} />
                </Col>
            </Row>
        </Card>
    ) : (
        <Card className='result-card' key={result.id}>
            <Row>
                <a href={result.link} className='result-card-name'>
                    {result.name}
                </a>
                <Button
                    type='text'
                    icon={
                        bookmarks.has(result.name) ? (
                            <BookFilled />
                        ) : (
                            <BookOutlined />
                        )
                    }
                    className='bookmark'
                    onClick={async () => {
                        console.log(bookmarks);
                        if (bookmarks.has(result.name)) {
                            let newBookmarks = new Map(bookmarks);
                            newBookmarks.delete(result.name);
                            await setBookmarks(newBookmarks);
                            console.log('deleted');
                        } else {
                            let newBookmarks = new Map(bookmarks);
                            newBookmarks.set(result.name, result);
                            await setBookmarks(newBookmarks);
                            console.log('added');
                        }
                    }}
                />
                <Button
                    type='text'
                    className='collapse-button'
                    onClick={() => setIsOpen(!isOpen)}
                    icon={isOpen ? <CaretUpFilled /> : <CaretDownFilled />}
                />
            </Row>
            <p className='result-card-description-closed'>
                {result.description}
            </p>
            {result.keywords.map(keyword => {
                return <Tag key={keyword.title} keyword={keyword} />;
            })}
        </Card>
    );
}
