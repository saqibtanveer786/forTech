// Importing Components
import TopSection from '../components/TopSection';
import FeaturedPosts from '../components/FeaturedPosts'

import 'react-quill/dist/quill.snow.css'
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <>
      <TopSection />
      <div className="container mx-auto">
        <FeaturedPosts />
      </div>
    </>
  );
}
