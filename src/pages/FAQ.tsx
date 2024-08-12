import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";

const FAQ = () => {
  return (
    <>
      <Container fluid className="py-5 px-0">
    <FeatureBlock
        title="Need Help? We've Got You Covered!"
        image="../images/faq-1.png"
        cta={{ label: "Get in Touch", link: "/contact" }}
    >
        <p>
            Preparing for your trip to Taniti should be as effortless as the island breeze. Whether you have questions about the ideal travel dates, the best ways to get around, or what essentials to bring, our FAQ section has you covered. Browse through our frequently asked questions below to find all the details you need for a seamless and memorable Taniti experience. If you can't find the answer you're looking for, feel free to contact us—we're here to make sure your visit is absolutely perfect.
        </p>
    </FeatureBlock>
</Container>
      <Container fluid className="grey-bg py-5">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h2>Frequently Asked Questions</h2>
          <div className="text-start mt-5 bg-light p-4 rounded shadow">
          <div className="qa-group">
  <p>
    <span>Q</span>: Is English commonly spoken on Taniti?
  </p>
  <p>
    <span>A</span>: Many young Tanitians speak fluent English, but it is less common in rural areas, especially among older residents.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: What currency is used on Taniti?
  </p>
  <p>
    <span>A</span>: Taniti uses the U.S. dollar, but euros and yen are also widely accepted. Currency exchange services are available at several banks, and most businesses accept major credit cards.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: When is the last call for alcohol?
  </p>
  <p>
    <span>A</span>: Alcohol cannot be sold or served between midnight and 9:00 a.m.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: What is the crime rate like on Taniti?
  </p>
  <p>
    <span>A</span>: Violent crime is extremely rare, but there has been an increase in pickpocketing and petty theft as tourism grows.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: What is the legal drinking age on Taniti?
  </p>
  <p>
    <span>A</span>: The legal drinking age is 18, though enforcement is not very strict.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: Do I need an adapter for my electronics?
  </p>
  <p>
    <span>A</span>: The power outlets are 120 volts, identical to those in the United States.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: Are tourist attractions and restaurants open on holidays?
  </p>
  <p>
    <span>A</span>: Many tourist spots and restaurants close during national holidays, so plan accordingly as Taniti has numerous holidays.
  </p>
</div>
<div className="qa-group">
  <p>
    <span>Q</span>: Are there medical facilities available on the island?
  </p>
  <p>
    <span>A</span>: Taniti has one hospital and several clinics, with many multilingual staff members at the hospital.
  </p>
</div>

          </div>
        </Container>
      </Container>
    </>
  );
};

export default FAQ;
