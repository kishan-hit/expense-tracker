import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavBar from "../../NavBar";
import DropDown from "../DropDown";
import './DataPage.css';

const DataPage = () => {
    const location = useLocation();
    const data = location.state.result || [];

    const categoryAmountMap = {};
    data.forEach(element => {
        if (!categoryAmountMap[element.category]) {
            categoryAmountMap[element.category] = 0;
        }
        categoryAmountMap[element.category] += parseFloat(element.amount);
    });

    const dropdownOptions = [...new Set(data.map(item => item.category))].map(category => ({ label: category, value: category }));

    const [selectedCategories, setSelectedCategories] = useState(data.map(item => item.category));

    const handleCategoryChange = (selectedOption, index) => {
        const newSelectedCategories = [...selectedCategories];
        newSelectedCategories[index] = selectedOption.value;
        setSelectedCategories(newSelectedCategories);
        console.log(`Updated category for row ${index}: ${selectedOption.value}`);
    };

    return (
        <div className="h-screen">
            <NavBar categoryAmountMap={categoryAmountMap} />
            <div className="mt-20 p-4">
                <Table striped bordered hover responsive className="p-4">
                    <thead>
                        <tr className="align-baseline" id="header">
                            <th className="table-cell">
                                <Form.Check.Input type="checkbox" className="shadow-none" />
                            </th>
                            <th className="table-cell">transactionDate</th>
                            <th className="table-cell">category</th>
                            <th className="table-cell">transactionType</th>
                            <th className="table-cell">amount</th>
                            <th className="table-cell">balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => (
                            <tr key={index}>
                                <td className="table-cell">
                                    <Form.Check.Input type="checkbox" className="shadow-none" />
                                </td>
                                <td className="table-cell">{element.transactionDate}</td>
                                <td className="table-cell">
                                    <DropDown
                                        options={dropdownOptions}
                                        value={dropdownOptions.find(option => option.value === selectedCategories[index])}
                                        onChange={(selectedOption) => handleCategoryChange(selectedOption, index)}
                                    />
                                </td>
                                <td className="table-cell">{element.transactionType}</td>
                                <td className="table-cell">{element.amount}</td>
                                <td className="table-cell">{element.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default DataPage;
