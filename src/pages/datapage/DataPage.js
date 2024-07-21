import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import DropDown from "../DropDown";
import './DataPage.css';
import LeftSideBar from "../../LeftSideBar";
import DashBoardLogo from "../../DashBoardLogo";

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
        <div className="h-screen flex">
            <LeftSideBar />
            <div className="p-3 w-full overflow-scroll">
                <div className="mb-4">
                    <DashBoardLogo />
                </div>
                <div className="flex justify-between bg-[#F2F3F9] p-3 rounded-t-md">
                    <div className="text-[#72777F]">
                        Transactions
                    </div>
                    <div className="text-[#72777F]">
                        All Transactions
                    </div>
                </div>
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
