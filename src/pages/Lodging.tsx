import { Container, Row, Col } from "react-bootstrap";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import { lodgingData } from "../constants/constants";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Lodging = () => {
  
  const slides: SlideshowData[] = [
    {
      image: "lodging-slide-1.png",
      heading: "Variety of Options",
      text: "Our selection is as varied as our scenic landscapes, ensuring you find the perfect spot to unwind after your island adventures. Explore our guides below to discover the top lodging options on Taniti, each offering unique features to enhance your stay.",
    },
    {
      image: "lodging-slide-2.png",
      heading: "Resorts",
      text: "Explore Taniti's finest resorts, where you can indulge in luxurious amenities, breathtaking views, and exceptional service. Each location provides a distinctive ambiance and unique features to ensure an unforgettable stay.",
    },
    {
      image: "lodging-slide-3.png",
      heading: "Services",
      text: "Discover Taniti's premier hotels, where you can experience exquisite accommodations, gourmet dining, and unparalleled service. Each establishment provides unique features and a distinctive atmosphere to ensure your stay is truly exceptional.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Choose your ultimate getaway</h2>
        <p>
        No matter your preference—be it a quaint bed and breakfast, 
        a lavish resort, or a charming cabin—Taniti has accommodations 
        to suit every taste. Our selection is as varied as our scenic 
        landscapes, ensuring you find the perfect spot to unwind after 
        your island adventures. Explore our guides below to discover 
        the top lodging options on Taniti, each offering unique features to enhance your stay.
        </p>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center blue-bg py-3 "
      >
        <h2 className="text-light">Top Places to Stay in Taniti</h2>
      </Container>
      <Container className="pt-5">
        <Row>
          {lodgingData.map((lodging, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <DisplayCard
                category={lodging.category}
                name={lodging.name}
                description={lodging.description}
                atmosphere={lodging.atmosphere}
                specialFeatures={lodging.specialFeatures}
                image={lodging.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Lodging;
