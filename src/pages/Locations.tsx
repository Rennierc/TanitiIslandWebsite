import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Locations = () => {
  const slides: SlideshowData[] = [
    {
      image: "locations-slide-1.png",
      heading: "Cultural Heritage",
      text: "Immerse yourself in the rich cultural heritage of Taniti with our guided tours. Visit traditional villages, historic sites, and cultural landmarks that tell the story of our island's vibrant history.",
    },
    {
      image: "locations-slide-2.png",
      heading: "Adventure Activities",
      text: "Experience the thrill of Taniti's adventure activities. From zip-lining through the canopy to kayaking along the coast, our guided tours offer exhilarating experiences for thrill-seekers.",
    },
    {
      image: "locations-slide-3.png",
      heading: "Wildlife Exploration",
      text: "Discover the diverse wildlife of Taniti on our guided exploration tours. Journey through rainforests, wetlands, and marine environments to observe the island's unique flora and fauna up close.",
    }
    
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Explore Taniti's Unique Landscapes and Heritage</h2>
        <p>
        Delve into the diverse beauty of Taniti beyond its picturesque beaches. Stroll through the bustling markets of Taniti Village, where local culture thrives. Discover the peaceful surroundings of Emerald Lagoon, home to exotic flora and fauna. Embark on a guided trek to Sunrise Summit for awe-inspiring views, or uncover the secrets of the ancient temple ruins hidden in the island’s jungle. Each location offers a distinct experience, showcasing Taniti's rich history and natural wonders. Explore the guide below to find the unforgettable sights that make Taniti a place like no other.
        </p>
      </Container>
      <FeatureBlock
        title="Sunset Cruises"
        image="../images/locations-boat-tours.png"
      >
        <p>
        Experience the magic of Taniti at dusk with our enchanting sunset cruises. Glide along the coast as the sun sets, painting the sky with stunning hues. Enjoy a relaxing evening with breathtaking views, perfect for creating lasting memories.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Adventure Expeditions"
        image="../images/locations-city.png"
        reverse
      >
        <p>
        For the thrill-seekers, our adventure expeditions offer exciting experiences like zip-lining, rock climbing, and jungle trekking. Discover the rugged beauty of Taniti’s interior and challenge yourself with these adrenaline-pumping activities.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Wildlife Safaris"
        image="../images/locations-volcano.png"
      >
        <p>
        Discover the diverse wildlife of Taniti on our guided safaris. Venture into the island’s jungles and wetlands to observe exotic animals in their natural habitat. These tours offer an unforgettable experience for wildlife enthusiasts.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Historical Walking Tours"
        image="../images/locations-rainforest.png"
        reverse
      >
        <p>
        Step back in time with our historical walking tours. Explore the island’s rich past by visiting ancient temples, colonial buildings, and historical landmarks. Learn about Taniti’s fascinating history from knowledgeable local guides.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Locations;
