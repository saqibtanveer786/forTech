//Importing  CSS File
import './globals.css';
import "@uploadthing/react/styles.css";

//Importing Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Toast from '../components/Toast';
import CommentUpModal from '../components/CommentUpModal';

//Importing Context
import Providers from '../contextproviders/Providers';

// Importing session provider next auth
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';

export const metadata = {
  title: 'forTech',
  description: 'This is a blog for the post related to the technologies.',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <div className='container max-w-7xl mx-auto relative'>
          <Providers>
            <Header session={session} />
            <Loader />
            {children}
            <Toast session={session} />
            <CommentUpModal />
          </Providers>
        </div>
      </body>
    </html>
  );
}
