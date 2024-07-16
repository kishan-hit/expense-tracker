import React, { useEffect, useState } from 'react';

const HotSearch = () => {
  const [searches, setSearches] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const hardcodedData = [
      'React 18',
      'JavaScript ES2023',
      'Next.js 13',
      'Node.js Performance',
      'TypeScript Tips',
    ];
    setSearches(hardcodedData);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setFilter(suggestion);
  };

  const filteredSearches = searches.filter((search) =>
    search.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className="w-full p-2 border border-gray-300 rounded-5"
        style={{ marginTop: 10 }}
      />
      {filter && (
        <ul className="list-none p-0">
          {filteredSearches.map((search, index) => (
            <li
              key={index}
              className="text-lg p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(search)}
            >
              {search}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HotSearch;