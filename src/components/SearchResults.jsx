import SearchResultCard from './SearchResultCard';

export default function SearchResults({ results, bookmarks, setBookmarks }) {
    return results.length > 0 ? (
        <div className='search-results'>
            {results.map(result => {
                return (
                    <SearchResultCard
                        result={result}
                        bookmarks={bookmarks}
                        setBookmarks={setBookmarks}
                    />
                );
            })}
        </div>
    ) : (
        <div className='no-results'>No results found.</div>
    );
}
