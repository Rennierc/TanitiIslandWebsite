import { Col, Container, Row } from "react-bootstrap";
import { cuisineData } from "../constants/constants";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import ExploreMoreCard from "../components/ExploreMoreCard/ExploreMoreCard";
import Slideshow from "../components/Slideshow/Slideshow";
import { SlideshowData } from "../components/Slideshow/Slideshow";

const Cuisine = () => {
  const slides: SlideshowData[] = [
    {
      image: "cuisine-slide-1.png",
      heading: "Savor the Taste of Taniti.",
      text: "Embark on a culinary journey through Taniti, where diverse flavors and aromas bring the island's culture and natural bounty to life. Delight in fresh seafood at quaint beachfront eateries or explore the vibrant array of fruits and vegetables at local markets. Whether you're savoring the daily catch, indulging in traditional dishes, or shopping for ingredients to prepare your own meals, you'll find that Taniti's cuisine is as inviting as its scenery. Discover the guides below for top dining spots and markets, each offering unique experiences to make your stay unforgettable.",
    },
    {
      image: "cuisine-slide-2.png",
      heading: "Restaurants",
      text: "Discover Taniti's top dining destinations, where you can savor fresh seafood, local delicacies, and more. Each restaurant boasts a distinctive ambiance and unique offerings, ensuring a memorable culinary experience.",
    },
    {
      image: "cuisine-slide-3.png",
      heading: "Taniti Shopping",
      text: "Explore the finest shopping destinations in Taniti, where you'll find fresh produce, unique local goods, and more. Each market and shop offers something distinctive, ensuring a memorable shopping experience.",
    },
  ];

  return (
    <>
      <Container fluid className="py-5 px-0">
        <Container className="pb-5">
          <h2>Discover the Flavors of Taniti</h2>
          <p>
            Start a tasty adventure across Taniti, where different flavors and
            smells bring to life our island's culture and natural gifts. Enjoy
            fresh seafood at our cozy beachside spots or check out the colorful
            fruits and veggies at our markets. Whether you're enjoying today's
            fresh catch, trying out local dishes, or grabbing groceries to make
            your own meals, you'll see our food is as welcoming as our views.
            Check out the guides below for the best places to eat and shop in
            Taniti, each offering something special to make your stay memorable.
          </p>
        </Container>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center blue-bg py-3 "
        >
          <h2 className="text-light">Restaurants</h2>
        </Container>
        <Container className="pt-5">
          <Row>
            {cuisineData.map(
              (cuisine, index) =>
                cuisine.category === "Restaurant" && (
                  <Col key={index} className="d-flex">
                    <DisplayCard
                      category={cuisine.category}
                      name={cuisine.name}
                      cuisine={cuisine.cuisine}
                      description={cuisine.description}
                      atmosphere={cuisine.atmosphere}
                      specialFeatures={cuisine.specialFeatures}
                      image={cuisine.image}
                    />
                  </Col>
                )
            )}
          </Row>
        </Container>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center blue-bg py-3 "
        >
          <h2 className="text-light">Taniti Shopping</h2>
        </Container>
        <Container className="pt-5">
          <Row>
            {cuisineData.map(
              (cuisine, index) =>
                cuisine.category !== "Restaurant" && (
                  <Col
                    lg={4}
                    key={index}
                    className="d-flex align-items-stretch"
                  >
                    <DisplayCard
                      category={cuisine.category}
                      name={cuisine.name}
                      cuisine={cuisine.cuisine}
                      description={cuisine.description}
                      atmosphere={cuisine.atmosphere}
                      specialFeatures={cuisine.specialFeatures}
                      image={cuisine.image}
                    />
                  </Col>
                )
            )}
            <Col lg={4} className="d-flex">
              <ExploreMoreCard to="lodging" text="Discover the perfect accommodation." />
            </Col>
          </Row>
        </Container>
      </Container>
      <Slideshow slides={slides} />
    </>
  );
};

export default Cuisine;
