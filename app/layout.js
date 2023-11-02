import dynamic from 'next/dynamic';

//Importing  CSS File
import './globals.css';
import "@uploadthing/react/styles.css";

//Importing Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Toast from '../components/Toast';
import CommentUpModal from '../components/CommentUpModal';
const FloatChat = dynamic(() => import("../components/FloatChat"))
// import FloatingChat from '../components/FloatingChat';

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
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
