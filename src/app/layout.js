// app/layout.js


import Header from '../components/Header';
import './globals.css';


export const metadata = {
  title: 'Hotel Eefa | Luxury Stay in Belgaum',
  description: 'Book your stay at Hotel Eefa – Premium amenities in Belgaum.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
