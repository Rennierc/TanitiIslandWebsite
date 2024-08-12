import { Container, Row, Col } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import { transportationData } from "../constants/constants";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Transportation = () => {
  const slides: SlideshowData[] = [
    {
      image: "transportation-slide-1.png",
      heading: "Effortless Commutes",
      text: "Experience the convenience of getting around Taniti with our reliable transportation options. From modern buses and taxis to scenic bike trails, navigating the island is effortless and enjoyable for every visitor.",
    },
    {
      image: "transportation-slide-2.png",
      heading: "Scenic Drives and Rides",
      text: "Take in the stunning vistas of Taniti with our scenic driving and cycling routes. Whether you rent a car or a bike, you'll find breathtaking views and easy access to all the island's must-see locations.",
    },
    {
      image: "transportation-slide-3.png",
      heading: "Island Connections",
      text: "Discover the best ways to connect with Taniti’s diverse locales, from quick ferry rides to leisurely walks through charming villages. Our transportation network ensures you can easily reach every corner of the island.",
    }
    
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
      <h2>Effortless Travel Across Taniti</h2>
    <p>
    Traveling to and around Taniti is a seamless experience, designed with every traveler in mind. Arrive with ease, whether you're landing at our state-of-the-art airport or sailing into the idyllic Yellow Leaf Bay. Your adventure starts the moment you arrive. Once here, exploring Taniti is a delight—from the energetic streets of Taniti City to the serene beaches and lush rainforests. Take advantage of our efficient public transport, scenic bike paths, or convenient car rentals to discover the island's treasures at your own pace. Dive into the adventure and freedom that Taniti offers, with all the travel information you need right at your fingertips.
    </p>
      </Container>
      <FeatureBlock
        title="Arrival by Sea"
        image="../images/transportation_sea.png"
        cta={{ label: "Cruise Schedules", link: "#" }}
      >
        <p>
        Experience the enchantment of arriving by sea, as your cruise ship docks at Yellow Leaf Bay. This method of arrival offers a breathtaking introduction to Taniti, presenting the island in all its panoramic beauty.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Touching Down by Air "
        image="../images/transportation_air.png"
        cta={{ label: "Flight Info", link: "#" }}
        reverse
      >
        <p>
        Land at Taniti’s welcoming airport, your entryway to tropical bliss. Catering to small jets and propeller planes, our airport is the starting point of your Taniti journey. With future plans to accommodate larger jets, visiting our island paradise will soon be even more convenient.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Easy Exploration"
        image="../images/transportation_explore.png"
      >
        <p>
        Discover Taniti City and its surroundings with ease using our diverse transportation options. Board a public bus, catch a taxi, or opt for a bike or car rental for a more personalized adventure. Taniti invites you to explore its walkable urban areas and picturesque routes that span the island.
        </p>
      </FeatureBlock>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center blue-bg py-3 "
      >
        <h2 className="text-light">Ways To Get Around</h2>
      </Container>
      <Container className="pt-5">
        <Row id="transportation">
          {transportationData.map((transportation, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <DisplayCard
                category={transportation.category}
                name={transportation.name}
                description={transportation.description}
                atmosphere={transportation.atmosphere}
                specialFeatures={transportation.specialFeatures}
                image={transportation.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Transportation;
