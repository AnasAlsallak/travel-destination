import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <>
      Author of the document : Anas Alsallak
      <br></br>
      <a href="https://www.youtube.com/" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
      <a href="https://www.facebook.com/" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
      <a href="https://www.twitter.com/" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
      <a href="https://www.instagram.com/" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
    </>
  );
}

export default Footer;