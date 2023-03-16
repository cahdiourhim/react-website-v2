import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nouveaux articles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/unavailable-image.jpg'
              text='Ordinateur'
              label='Technologie'
            />
            <CardItem
              src='images/unavailable-image.jpg'
              text='Fauteuil'
              label='Maison'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/unavailable-image.jpg'
              text='Console'
              label='Jeux-videos'
            />
            <CardItem
              src='images/unavailable-image.jpg'
              text='Ballons'
              label='Sport'
                          />
            <CardItem
              src='images/unavailable-image.jpg'
              text='Plantes'
              label='Jardinage'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
