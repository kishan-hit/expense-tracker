import React, { useState, useEffect } from "react";
import Select from "react-select";

const DropDown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const storedValue = localStorage.getItem("selectedCategory");
        if (storedValue) {
            setSelectedOption(JSON.parse(storedValue));
        }
    }, []);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        localStorage.setItem("selectedCategory", JSON.stringify(selectedOption));
    };

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
        />
    );
};

export default DropDown;
