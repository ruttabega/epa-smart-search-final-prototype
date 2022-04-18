import { Card, Select, Checkbox, Button, Modal } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import SearchResultCard from './SearchResultCard';
export default function Bookmarks({ bookmarks, setBookmarks }) {
    const bookmarkArray = Array.from(bookmarks.values());
    const [showBookmarks, setShowBookmarks] = useState(false);
    return (
        <div>
            <Button
                className='bookmark-collapse-button'
                onClick={() => setShowBookmarks(true)}
            >
                View Bookmarked Results
            </Button>
            <Modal
                width={1250}
                title='Bookmarked Results'
                visible={showBookmarks}
                onCancel={() => setShowBookmarks(false)}
                footer={null}
            >
                {bookmarkArray.length > 0 ? (
                    <div className='bookmark-results'>
                        {bookmarkArray.map(bookmark => {
                            return (
                                <SearchResultCard
                                    result={bookmark}
                                    bookmarks={bookmarks}
                                    setBookmarks={setBookmarks}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className='no-results'>No bookmarks found.</div>
                )}
            </Modal>
        </div>
    );
}
