import { Button, Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";

const Home = () => {
  return (
    <Container fluid className="py-5 px-0">
      <Container>
        <h2>Explore the Enchanted Treasure of the Pacific.</h2>
        <p>
          <b>Taniti</b> Taniti, a hidden oasis in the vast Pacific Ocean, 
          covers less than 1,000 square miles yet boasts a rich tapestry of 
          stunning landscapes. The island boasts tranquil sandy shores, rugged 
          cliff-lined coastlines, a charming harbor, vibrant rainforests filled 
          with exotic flora and fauna, and a mountainous area highlighted by a 
          strikingly beautiful active volcano. With a population of about 15,000 
          indigenous inhabitants, Taniti has a rich cultural heritage. 
          Traditionally, its economy thrived on fishing and agriculture, 
          but a recent wave of eco-tourism and adventure travel is ushering in 
          a new era of prosperity and transformation for the island community.
        </p>
      </Container>
      <FeatureBlock
        title="A Culinary Adventure"
        image="../images/cuisine-home.png"
        cta={{ label: "Explore the Cuisine", link: "/cuisine" }}
      >
        <p>
          Indulge in a culinary adventure across the vibrant island of Taniti. 
          Sample the freshest seafood straight from our pristine waters, savoring
          the flavors at charming harbor-side eateries. Delight in the unique 
          tastes of exotic fruits and aromatic spices cultivated in Taniti's 
          fertile lands. Discover a range of dining experiences, from cozy beachside
          cafes and elegant fine dining establishments to lively local markets,
          each offering an authentic slice of island life. Taniti’s cuisine is
          a true reflection of its rich traditions and local ingredients.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Find Your Oasis."
        image="../images/lodging-home.png"
        cta={{ label: "Book Your Stay", link: "/lodging" }}
        reverse
      >
        <p>
        Choose the perfect stay on Taniti, ranging from upscale resorts to quaint 
        beachside cottages. Whether you're planning a romantic escape, a family vacation, 
        or a solo trip, Taniti provides a variety of lodging options to fit every style and budget. 
        Start your day with spectacular ocean views, unwind in lush tropical surroundings, 
        and enjoy the heartfelt hospitality of our island community.
        </p>
      </FeatureBlock>
      <Container fluid className="py-5 hero-bg home-cta-banner text-center">
        <h2 className="text-center text-light">Explore Taniti Seamlessly</h2>
        <p className="text-center text-light h4 mb-4">
        Design your perfect getaway to Taniti and uncover the wonders of the Pacific.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="text-light text-center"
          href="https://www.tripadvisor.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Book Now
        </Button>
      </Container>
      <FeatureBlock
        title="Experience the Island Life"
        image="../images/entertainment-home.png"
        cta={{ label: "Plan Your Adventure", link: "/entertainment" }}
      >
        <p>
        From dawn till dusk, Taniti offers an abundance of exciting activities and 
        unique experiences. Stroll along the pristine beaches, snorkel through colorful 
        coral reefs, and trek through lush rainforests teeming with rare wildlife. 
        For adventure seekers, try exhilarating water sports like jet skiing and 
        parasailing, paddle through clear waters on a kayaking trip, or hike to 
        breathtaking scenic vistas. Unwind with a refreshing cocktail on the beach 
        or explore the island’s mysterious hidden caves. Embrace the magic of Taniti 
        and create lasting memories that you’ll cherish forever.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Discover the Beauty of Taniti"
        image="../images/location-home.png"
        cta={{ label: "Explore the Island", link: "/locations" }}
        reverse
      >
        <p>
        Taniti is an unspoiled paradise just waiting to be discovered, 
        with breathtaking natural landscapes, a vibrant cultural tapestry, 
        and friendly, hospitable locals. Explore charming traditional villages, 
        ancient historical landmarks, and panoramic viewpoints that showcase the 
        island's stunning vistas. Engage with the lively local culture, from its 
        colorful festivals and music to its delectable cuisine. Dive into the wonders 
        of Taniti, and let the island's serene beauty and rich heritage captivate your heart.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Getting around Taniti"
        image="../images/transportation-home.png"
        cta={{ label: "Start Your Journey", link: "/transportation" }}
      >
        <p>
        Reaching Taniti is a breeze, with frequent flights from major regional cities. 
        Upon arrival, explore the island by renting a car, scooter, or bicycle, or using 
        the convenient public transportation. Unearth hidden treasures off the main trails, 
        or join a guided tour to delve into Taniti's rich history, vibrant culture, and 
        breathtaking natural wonders. No matter how you choose to navigate, 
        Taniti guarantees an unforgettable adventure.
        </p>
      </FeatureBlock>
    </Container>
  );
};

export default Home;
