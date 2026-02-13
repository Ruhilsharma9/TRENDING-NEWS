import React, { useState, useEffect } from 'react';
import Card from './Cards';

const NewsApp = () => {
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "d779869892384bd087f1494bda78d5ae";
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );

    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };

  return (
    <div>
      <nav>
        <h1>Trendy News</h1>

        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>

        <input
          type="text"
          placeholder="search news"
          value={search}
          onChange={handleInput}
        />

        <button onClick={getData}>Search</button>
      </nav>

      <p className="head">Stay Updated With Trendy News</p>

      <div className="Categorybutton">
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="fitness">Fitness</button>
        <button onClick={userInput} value="health">Health</button>
      </div>

      <div>
        {newsData && <Card data={newsData} />}
      </div>
    </div>
  );
};

export default NewsApp;
