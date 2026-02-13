import React from 'react';

const Cards = ({ data }) => {
  console.log(data);

  const readmore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className='cardcontainer'>
      {data.map((curItem, index) => {
        return (
          <div className='card' key={index}>
            <img src={curItem.urlToImage} alt="news" />

            <div className='cardcontent'>
              <a
                className='title'
                onClick={() => readmore(curItem.url)}
              >
                {curItem.title}
              </a>

              <p>{curItem.description}</p>

              <button onClick={() => readmore(curItem.url)}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;


