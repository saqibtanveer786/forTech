// Importing Components
import TopSection from '../components/TopSection';
import FeaturedPosts from '../components/FeaturedPosts'

export default function Home() {
  return (
    <>
      <TopSection />
      <div className="container mx-auto">
        <FeaturedPosts />
      </div>
    </>
  );
}
