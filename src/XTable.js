import React, { useState } from "react";
import "./XTable.css";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function XTable() {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState("");

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      // If dates are equal, sort by views
      return b.views - a.views;
    });
    setData(sortedData);
    setSortBy("date");
  };

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views < b.views) return 1;
      if (a.views > b.views) return -1;
      // If views are equal, sort by date
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
    setSortBy("views");
  };

  return (
    <div className="table-container">
      <h1>Date and Views Table</h1>
      <div className="buttons-container">
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default XTable;
