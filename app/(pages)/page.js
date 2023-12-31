// Importing Components
import TopSection from '../../components/HomePage/TopSection';
import FeaturedPosts from '../../components/HomePage/FeaturedPosts'
import AdsForFrontPage from '../../components/HomePage/AdsForFrontPage'


export const metadata = {
  title: 'forTech',
  description: 'forTech | a blog for the post related to the technology',
  openGraph: {
    type: "website",
    url: process.env.HOST,
    title: "forTech",
    description: "forTech | a blog for post related to the technology",
    siteName: "forTech",
    images: [
      {
        url: 'https://fortech-alpha.vercel.app/img/general.webp',
        width: 600,
        height: 800,
        alt: 'forTech'
      },
      {
        url: 'https://fortech-alpha.vercel.app/img/general.webp',
        width: 1600,
        height: 1800,
        alt: 'forTech',
      },
    ],
  }
}

export default async function Home() {
  return (
    <>
      <TopSection />
      <AdsForFrontPage />
      <div className="container mx-auto">
        <FeaturedPosts />
      </div>
    </>
  );
}
