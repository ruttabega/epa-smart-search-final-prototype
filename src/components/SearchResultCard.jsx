import { useState } from 'react';
import { Card, Button, Row, Col, Table, Tooltip } from 'antd';
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
    return techSupport.name !== 'N/A' ? (
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
    ) : null;
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

    return (
        <table className='tag-table-table'>
            <tbody className='tag-table'>
                {columns.map(column => (
                    <tr className='tag-table-row'>
                        <th className='tag-table-head'>{column.title}</th>
                        <td className='tag-table-data'>
                            <div>
                                {data[column.dataIndex][0]
                                    ? data[column.dataIndex]?.map(tag => {
                                          return (
                                              <Tag
                                                  keyword={tag}
                                                  location='tag-table'
                                              />
                                          );
                                      })
                                    : 'N/A'}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function SearchResultCard({ result, bookmarks, setBookmarks }) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <Card className='result-card' key={result.id}>
            <Row>
                <Col span={22}>
                    <a href={result.link} className='result-card-name'>
                        {result.name}
                    </a>
                </Col>
                <Col>
                    <Tooltip title='Bookmark this result'>
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
                                if (bookmarks.has(result.name)) {
                                    let newBookmarks = new Map(bookmarks);
                                    newBookmarks.delete(result.name);
                                    await setBookmarks(newBookmarks);
                                } else {
                                    let newBookmarks = new Map(bookmarks);
                                    newBookmarks.set(result.name, result);
                                    await setBookmarks(newBookmarks);
                                }
                            }}
                        />
                    </Tooltip>
                    <Tooltip title='Hide details'>
                        <Button
                            type='text'
                            className='collapse-button'
                            onClick={() => setIsOpen(!isOpen)}
                            icon={
                                isOpen ? <CaretUpFilled /> : <CaretDownFilled />
                            }
                        />
                    </Tooltip>
                </Col>
            </Row>
            <Row>
                <Col span={15}>
                    <p className='result-card-description-open'>
                        {result.shortDescription}
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
                <Col span={22}>
                    <a href={result.link} className='result-card-name'>
                        {result.name}
                    </a>
                </Col>
                <Col>
                    <Tooltip title='Bookmark this result'>
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
                                if (bookmarks.has(result.name)) {
                                    let newBookmarks = new Map(bookmarks);
                                    newBookmarks.delete(result.name);
                                    await setBookmarks(newBookmarks);
                                } else {
                                    let newBookmarks = new Map(bookmarks);
                                    newBookmarks.set(result.name, result);
                                    await setBookmarks(newBookmarks);
                                }
                            }}
                        />
                    </Tooltip>
                    <Tooltip title='Show details'>
                        <Button
                            type='text'
                            className='collapse-button'
                            onClick={() => setIsOpen(!isOpen)}
                            icon={
                                isOpen ? <CaretUpFilled /> : <CaretDownFilled />
                            }
                        />
                    </Tooltip>
                </Col>
            </Row>
            <p className='result-card-description-closed'>
                {result.shortDescription}
            </p>
            {result.keywords.map(keyword => {
                if (
                    keyword.type === 'environmentalTopicArea' ||
                    keyword.type === 'platform' ||
                    keyword.type === 'scientificApplicationType'
                ) {
                    return <Tag key={keyword.title} keyword={keyword} />;
                }
            })}
        </Card>
    );
}
