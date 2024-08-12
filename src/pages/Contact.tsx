import { Col, Container, Row } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import ContactForm from "../components/Forms/ContactForm";

const Contact = () => {
  return (
    <>
      <Container fluid className="py-5 px-0">
        <FeatureBlock title="Contact Us" image="../images/contact-1.png">
          <p>
          Whether you’re planning a visit to Taniti or simply want to learn more about our offerings, we’re excited to hear from you. Reach out with any questions, comments, or feedback, and our team will respond promptly. You can contact us via email, phone, or by filling out the form below. We're here to assist you in planning your ideal Taniti experience.
          </p>
        </FeatureBlock>
      </Container>
      <Container fluid className="py-5 grey-bg">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
            <h2>Contact Information</h2>
            <p>
            <b>Hours:</b> Monday - Friday, 8:00 AM - 8:00 PM (PST)
            </p>
            <p>
            <b>Email:</b> <a href="mailto:contact@taniti.com">contact@tanitigov.com</a>
            </p>
            <p>
            <b>Phone:</b> <a href="tel:+12323232323">+1 (232) 323-2323</a>
            </p>
            <p>
            <b>Address:</b> 456 Seaview Avenue, Taniti Island, Pacific Ocean
            </p>

              <p>
                <small>
                  <b>Note:</b> We are <em className="text-muted">closed</em> on{" "}
                  <em className="text-muted">weekends</em> and{" "}
                  <em className="text-muted">major holidays</em>.
                </small>
              </p>
            </Col>
            <Col lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
