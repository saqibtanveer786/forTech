// Importing Components
import TopSection from '../components/TopSection';
import FeaturedPosts from '../components/FeaturedPosts'

import 'react-quill/dist/quill.snow.css'

export default async function Home() {
  return (
    <>
      <TopSection />
      <div className="container mx-auto">
        <FeaturedPosts />
      </div>
    </>
  );
}
