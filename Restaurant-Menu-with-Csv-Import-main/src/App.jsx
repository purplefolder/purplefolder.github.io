import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './index.css';
import Navbar from './componenet/Navbar';

const CsvImporter = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/finalmenu.csv');
        const text = await response.text();

        Papa.parse(text, {
          complete: (result) => {
            setCsvData(result.data);
          },
          header: true,
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div>
        <Navbar />
        {csvData.length > 0 && (
          <div className='category'>
            <ul>
              {Array.from(new Set(csvData.map((item) => item.Category))).map((category, index) => (
                <li key={index} onClick={() => handleCategoryClick(category)}>
                  {category}
                </li>
              ))}
            </ul>

            {selectedCategory && (
              <div>
                <h3>{selectedCategory}</h3>
                <table>
                  <thead>
                    <tr>
                      {Object.keys(csvData[0]).map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='cat2'>
                    {csvData
                      .filter((row) => row.Category === selectedCategory)
                      .map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, colIndex) => (
                            <td key={colIndex}>{value}</td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
      <div>{/* Your footer or additional content goes here */}</div>
    </>
  );
};

export default CsvImporter;
