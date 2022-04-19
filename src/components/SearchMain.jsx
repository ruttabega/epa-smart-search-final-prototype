import React from 'react';
import { Input, Tooltip, Select, Button, Row, Col } from 'antd';
import { SearchOutlined, LineOutlined } from '@ant-design/icons';
import SearchResults from './SearchResults';

export default function SearchMain({
    searchData,
    searchFields,
    setSearchFields,
    searchValue,
    setSearchValue,
    results,
    setResults,
    bookmarks,
    setBookmarks,
    doSearch,
    selectedMatchOption,
    setSelectedMatchOption
}) {
    const handleSearchFieldChange = field => {
        if (field === 'name') {
            setSearchFields({
                ...searchFields,
                name: !searchFields.name
            });
        } else if (field === 'acronym') {
            setSearchFields({
                ...searchFields,
                acronym: !searchFields.acronym
            });
        } else if (field === 'shortDescription') {
            setSearchFields({
                ...searchFields,
                shortDescription: !searchFields.shortDescription
            });
        } else if (field === 'longDescription') {
            setSearchFields({
                ...searchFields,
                longDescription: !searchFields.longDescription
            });
        } else if (field === 'keywords') {
            setSearchFields({
                ...searchFields,
                keywords: !searchFields.keywords
            });
        }
    };

    const onSearch = e => {
        setSearchValue(e.target.value);
    };

    const matchOptions = [
        { value: 'Match any terms' },
        { value: 'Match all terms' }
    ];

    const SearchMatch = () => {
        return (
            <Select
                bordered={false}
                defaultValue='Match any terms'
                onChange={e => setSelectedMatchOption(e.target.value)}
                showArrow
                options={matchOptions}
            />
        );
    };
    return (
        <div className='search-main'>
            <Row>
                <Col>
                    <Input
                        className='search-input'
                        placeholder='Search...'
                        allowClear
                        onChange={onSearch}
                        value={searchValue}
                        prefix={<SearchOutlined />}
                        suffix={<SearchMatch />}
                    />
                </Col>
                <Col>
                    <Button
                        className='search-button'
                        onClick={() => doSearch()}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
            <Row>
                <div className='search-fields'>
                    <p>Search fields</p>
                    <Button
                        size='small'
                        className={
                            searchFields.name
                                ? 'search-field-button-selected'
                                : 'search-field-button-unselected'
                        }
                        onClick={() => handleSearchFieldChange('name')}
                    >
                        Name
                    </Button>
                    <Button
                        size='small'
                        className={
                            searchFields.acronym
                                ? 'search-field-button-selected'
                                : 'search-field-button-unselected'
                        }
                        onClick={() => handleSearchFieldChange('acronym')}
                    >
                        Acronym
                    </Button>
                    <Button
                        size='small'
                        className={
                            searchFields.shortDescription
                                ? 'search-field-button-selected'
                                : 'search-field-button-unselected'
                        }
                        onClick={() =>
                            handleSearchFieldChange('shortDescription')
                        }
                    >
                        Short Description
                    </Button>
                    <Button
                        size='small'
                        className={
                            searchFields.longDescription
                                ? 'search-field-button-selected'
                                : 'search-field-button-unselected'
                        }
                        onClick={() =>
                            handleSearchFieldChange('longDescription')
                        }
                    >
                        Long Description
                    </Button>
                    <Button
                        size='small'
                        className={
                            searchFields.keywords
                                ? 'search-field-button-selected'
                                : 'search-field-button-unselected'
                        }
                        onClick={() => handleSearchFieldChange('keywords')}
                    >
                        Keywords
                    </Button>
                </div>
            </Row>
            <Row>
                <SearchResults
                    results={results}
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                />
            </Row>
        </div>
    );
}
