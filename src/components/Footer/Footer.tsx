import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";


type year = number;

const Footer = () => {
  const currentYear: year = new Date().getFullYear();
  return (
    <Container fluid className="pt-3 px-3 blue-bg">
      <Container>
      <Row className="py-3">
          <Col xs={12} className="text-center p-0">
            <small>
              &copy; {currentYear} - Taniti Copyright
            </small>
          </Col>
          <Col xs={12} className="text-center p-0 small">
            <small>
              <a href="https://www.linkedin.com/in/rennier-cuba-719907252/">
                Rennier Cuba
              </a>{" "}
              
            </small>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="bg-light rounded p-2">
              <img
                src="../images/taniti-logo.png"
                alt="Taniti Logo"
                height="75px"
              />
            </div>
            <div className="d-flex flex-column">
              <p className="fw-bold text-center mt-2">Social Media</p>
              <ul className={styles.socialIcons}>
                <li>
                  <a
                    className="pointer"
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <img
                      src="../images/fb-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <img
                      src="../images/linkedin-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.twitter.com"
                    target="_blank"
                  >
                    <img
                      src="../images/x-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.tiktok.com"
                    target="_blank"
                  >
                    <img
                      src="../images/tiktok-social.png"
                      alt="Facebook"
                      width="40px"
                      height="40px"
                      className="m-1"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <div className="d-flex flex-column">
              <p className="fw-bold mb-1">Explore</p>
              <NavLink to="/cuisine">Cuisine</NavLink>
              <NavLink to="/lodging">Lodging</NavLink>
              <NavLink to="/entertainment">Entertainment</NavLink>
              <NavLink to="/locations">Locations</NavLink>
              <NavLink to="/transportation">Transportation</NavLink>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <p className="fw-bold mb-1">Additional Links</p>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact" className="mb-3">
              Contact Us
            </NavLink>
            
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
};

export default Footer;
