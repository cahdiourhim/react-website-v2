import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Stock Video Ecommerce Shopping.mp4' autoPlay loop muted />
      <h1>SHOP AVEC NOUS</h1>
      <p>Crée ton compte et lance-toi</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Créer mon compte
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
