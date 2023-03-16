import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-abonnements'>
        <p className='footer-abonnements-heading'>
          Rejoignez la news-letter pour recevoir nos offres.
        </p>
        <p className='footer-abonnements-text'>
          Abonnez vous à tous moments.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'abonner</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Liens utiles</h2>
            <Link to='/'>Mon Compte</Link>
            <Link to='/'>Mon panier</Link>
            <Link to='/'>Vendre</Link>
            <Link to='/'>Suivre ma commande</Link>
            <Link to='/'>Deconnexion</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Aides</h2>
            <Link to='/'>Nous contacter</Link>
            <Link to='/'>Conditions générales</Link>
            <Link to='/'>Signaler du contenu illicite</Link>
          </div>
        </div>
      </div>
      <section class='Réseaux-sociaux'>
        <div class='Réseaux-sociaux-wrap'>
          <div class='footer-logo'>
          </div>
          <div class='icones'>
            <Link
              class='icone facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='icone instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='icone youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='icone twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='icone twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
