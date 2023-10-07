//Importing  CSS File
import './globals.css';
import "@uploadthing/react/styles.css";

//Importing Components
import Header from '../components/Header';
import Loader from '../components/Loader';
import Toast from '../components/Toast';

//Importing Context
import AlertContextProvider from '../contextproviders/AlertContextProvider';
import LoadingContextProvider from '../contextproviders/LoadingContextProvider ';

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
          {/* <SessionProvider> */}
          <LoadingContextProvider>
            <AlertContextProvider>
              <Header session={session} />
              <Loader />
              {children}
              <Toast session={session} />
            </AlertContextProvider>
          </LoadingContextProvider>
          {/* </SessionProvider> */}
        </div>
      </body>
    </html>
  );
}
