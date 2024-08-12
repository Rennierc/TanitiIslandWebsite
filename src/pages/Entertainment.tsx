import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Entertainment = () => {
  const slides: SlideshowData[] = [
    {
      image: "entertainment-slide-1.png",
      heading: "Star Gazing",
      text: "Taniti's clear, unpolluted skies make it the perfect place for star gazing. Join our guided night tours to observe constellations, planets, and the Milky Way. Stay tuned for more details!",
    },
    {
      image: "entertainment-slide-2.png",
      heading: "Artisanal Workshops",
      text: "Get hands-on with Taniti's rich artisanal traditions. Participate in workshops led by local craftsmen, where you can learn pottery, weaving, and more. Coming soon!",
    },
    {
      image: "entertainment-slide-3.png",
      heading: "Eco-Trekking",
      text: "Explore Taniti's diverse ecosystems with our eco-trekking adventures. Hike through rainforests, coastal trails, and volcanic landscapes while learning about the island's unique flora and fauna. Stay tuned for more details!",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Discover Taniti’s Hidden Gems</h2>
        <p>
        Taniti is more than just stunning scenery—it’s a treasure trove of 
        unique experiences. Wander through bustling night markets, dance to 
        live music under the stars, or take a culinary tour to sample local 
        flavors. Adventure seekers can try parasailing, deep-sea fishing, or 
        mountain biking through scenic trails. Art lovers will enjoy our 
        galleries and craft workshops, while those looking to unwind can 
        find peace in beach yoga sessions. Explore below to uncover Taniti’s 
        best-kept secrets and make the most of your stay.
        </p>
      </Container>
      <FeatureBlock
        title="Cultural Festivals"
        image="../images/entertainment-underwater.png"
      >
        <p>
        Immerse yourself in Taniti’s vibrant culture by attending one of 
        its lively festivals. Experience traditional dances, music performances, 
        and artisanal crafts that reflect the island’s rich heritage. 
        These festivals offer a joyful and colorful glimpse into the heart of Taniti’s community life.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Ocean Kayaking Adventures"
        image="../images/entertainment-history.png"
        reverse
      >
        <p>
        Paddle through Taniti’s serene coastal waters on an ocean kayaking expedition. 
        Navigate through hidden coves, encounter playful dolphins, and explore the island’s 
        stunning shoreline from a unique vantage point. Perfect for both beginners and seasoned 
        kayakers, this adventure promises unforgettable marine encounters.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Culinary Tours"
        image="../images/entertainment-canopy.png"
      >
        <p>
        Embark on a culinary tour to savor the diverse flavors of Taniti. Visit local 
        markets, taste freshly caught seafood, and enjoy traditional dishes prepared by 
        local chefs. This gastronomic journey will introduce you to the island’s unique 
        culinary heritage and delight your taste buds with every bite.
        </p>
      </FeatureBlock>

      <FeatureBlock
        title="Sunset Beach Yoga"
        image="../images/entertainment-nightlife.png"
        reverse
      >
        <p>
        Find tranquility with a sunset beach yoga session. Let the sound of the waves 
        and the warm glow of the setting sun enhance your practice. Led by expert instructors, 
        these sessions are designed to help you relax and rejuvenate while taking in the 
        breathtaking beauty of Taniti’s coastline.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Entertainment;
