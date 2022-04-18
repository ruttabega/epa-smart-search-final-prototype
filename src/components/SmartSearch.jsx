import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import AdvancedSearch from './AdvancedSearch';
import SearchMain from './SearchMain';
import Bookmarks from './Bookmarks';

const searchData = [
    {
        id: 1,
        name: 'Example 1',
        link: 'https://google.com',
        description:
            'RSIG allows for quick and easy access to subsets of multi-terabyte, environmental datasets via an interactive, Web browser-based application. A file download and parsing process that typically takes months is reduced to minutes with RSIG.',
        keywords: [
            { type: 'environmentalTopicArea', title: 'keyword 1' },
            { type: 'platform', title: 'keyword 2' },
            { type: 'scientificApplicationType', title: 'keyword 3' }
        ],
        disclaimer:
            'Petroleum Vapor Intrusion is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'John Doe',
            number: '555-555-5555',
            email: 'jdoe@email.com'
        }
    }
];

export default function SmartSearch() {
    const [advancedOptions, setAdvancedOptions] = useState({
        environmentalTopicAreas: [],
        platform: {
            browserBased: false,
            desktop: false,
            mobileApp: false,
            webService: false
        },
        scientificApplicationType: []
    });
    const [searchFields, setSearchFields] = useState({
        name: false,
        acronym: false,
        shortDescription: false,
        longDescription: false,
        keywords: false
    });
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [bookmarks, setBookmarks] = useState(new Map());

    return (
        <Row>
            <Col>
                <AdvancedSearch
                    advancedOptions={advancedOptions}
                    setAdvancedOptions={setAdvancedOptions}
                />
                <br />
                <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
            </Col>
            <Col style={{ paddingLeft: '20px' }}>
                <SearchMain
                    searchData={searchData}
                    searchFields={searchFields}
                    setSearchFields={setSearchFields}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    results={results}
                    setResults={setResults}
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                />
            </Col>
        </Row>
    );
}
