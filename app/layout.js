//Importing  CSS File
import './globals.css';
import "@uploadthing/react/styles.css";

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
