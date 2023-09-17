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

export const metadata = {
  description: 'This is a blog for the post related to the technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingContextProvider>
          <AlertContextProvider>
            <Header />
            <Loader />
            {children}
            <Toast />
          </AlertContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  );
}
