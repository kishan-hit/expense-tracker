import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DropDown from './pages/DropDown';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ categoryAmountMap }) => {
    const navigate = useNavigate();

    const dropdownOptions = [
        { label: 'Bar Graph', value: 'bar-graph' },
        { label: 'Pie Chart', value: 'pie-chart' }
    ];

    const handleDropdownChange = (selectedOption) => {
        if (selectedOption.value === 'bar-graph') {
            navigate('/graph', { state: { categoryAmountMap } });
        } else if (selectedOption.value === 'pie-chart') {
            navigate('/pie-chart', { state: { categoryAmountMap } });
        }
    };

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <DropDown 
                options={dropdownOptions} 
                onChange={handleDropdownChange}
            />
        </Navbar>
    );
}

export default NavBar;

