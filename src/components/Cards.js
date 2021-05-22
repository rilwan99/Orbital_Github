import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these USEFUL articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Is the stock market outdated?'
              label='Stocks'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The future of finance'
              label='Crypocurrency'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Technical Analysis tutorial'
              label='Options'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Is it profitable to invest in property?'
              label='REIT'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='What are securities?'
              label='securities'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
