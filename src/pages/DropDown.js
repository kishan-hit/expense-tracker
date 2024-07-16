import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        background: 'rgb(220, 245, 227)',
        border: '0',
        borderRadius: '30px',
        width: '12em'
    }),
    indicatorSeparator: () => ({
        display: 'none',
    })
};

const DropDown = ({ options, value, onChange }) => {
    return (
        <Select
            options={options}
            value={value}
            onChange={onChange}
            styles={customStyles}
            menuPortalTarget={document.body}
            menuPosition="fixed"
        />
    );
};

export default DropDown;
