import { BookOutlined, BookFilled } from '@ant-design/icons';

export default function Bookmark(isBookmarked, setIsBookmarked) {
    return isBookmarked ? <BookFilled /> : <BookOutlined />;
}
