import FeaturedListings from "../components/FeaturedListings";
import { Overview } from "../components/Overview";

function HomePage() {
  return (
    <div className="px-6">
      <Overview />
      <FeaturedListings />
    </div>
  );
}

export default HomePage;
