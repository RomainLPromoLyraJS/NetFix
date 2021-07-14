import React from 'react';

/* -- Icons imports from Material UI -- */
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {
    return (
        <div className="footer">
           <div className="container">
               <div className="footer__socials">
                   <a href="/" className="footer__socials__social"><FacebookIcon /></a>
                   <a href="/" className="footer__socials__social"><InstagramIcon /></a>
                   <a href="/" className="footer__socials__social"><TwitterIcon /></a>
                   <a href="/" className="footer__socials__social"><YouTubeIcon /></a>
               </div>
               <ul className="footer__links">
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                       </li>
                   <li className="footer__links__link">
                       <a href="/">Lien</a>
                   </li>
               </ul>
               <div className="footer__copy">
                   Netflix Clone - tous droits réservés
               </div>
           </div>
        </div>
    );
};

export default Footer;