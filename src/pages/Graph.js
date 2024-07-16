import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { useLocation } from "react-router-dom";

const Graph = () => {
    const location = useLocation();
    const categoryAmountMap = location.state.categoryAmountMap;
    const data = Object.keys(categoryAmountMap).map(key => ({
        name: key,
        value: categoryAmountMap[key]
    }));

    console.log('data', data);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#CD5C5C', '#DFFF00', '#FFBF00'];

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <LabelList dataKey="value" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;