import React, { useEffect, useState } from 'react';

const SearchBankInModal = ({ placeholder, styles, onFilterChange }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='relative'>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border-gray-300 rounded-5"
        style={{ ...styles }}
      />
      <div className='h-full absolute right-3 top-0 flex items-center'>
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
};

export default SearchBankInModal;
