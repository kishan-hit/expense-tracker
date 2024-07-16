import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useLocation } from "react-router-dom";

const getRandomColor = (existingColors) => {
    const letters = '0123456789ABCDEF';
    let color;
    do {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    } while (existingColors.includes(color));
    return color;
}

const PieCharts = () => {
    const location = useLocation();
    const categoryAmountMap = location.state.categoryAmountMap;

    const data = Object.keys(categoryAmountMap).map(key => ({
        name: key,
        value: categoryAmountMap[key]
    }));

    const COLORS = [];
    data.forEach(() => {
        const color = getRandomColor(COLORS);
        COLORS.push(color);
    });

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#CD5C5C"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="legend-container" style={{ textAlign: 'center', marginTop: '20px' }}>
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} style={{ display: 'inline-block', marginRight: '20px' }}>
                        <span style={{ backgroundColor: COLORS[index], padding: '5px', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span>
                        <span>{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieCharts;
