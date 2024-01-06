//Importing  CSS File
import Header from '@components/DashboardHeader';
import './globals.css';
import "@uploadthing/react/styles.css";
import { getAuthSession } from 'lib/auth';

export const metadata = {
  title: 'forTech',
  description: 'This is a blog for the post related to the technologies.',
};

export default async function RootLayout({ children }) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body>
        <Header session={session}/>
        {children}
      </body>
    </html>
  );
}
