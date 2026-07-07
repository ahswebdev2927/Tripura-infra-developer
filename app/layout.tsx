// import type { Metadata } from 'next';
// import { Inter, Poppins } from 'next/font/google';
// import './globals.css';
// import Header from '@/Components/layout/Header';
// import Footer from '@/Components/layout/Footer';
// import StickyHeader from '@/Components/layout/StickyHeader';
// import FloatingButtons from '@/Components/layout/FloatingButtons';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const poppins = Poppins({
//   weight: ['400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   variable: '--font-poppins',
// });

// export const metadata: Metadata = {
//   title: 'Tripura Infra Developers | Best Construction Company in Hyderabad',
//   description:
//     '20+ years of excellence in residential, commercial & industrial construction. Quality, transparency & on-time delivery. Get free consultation.',
//   keywords:
//     'construction company hyderabad, residential construction, commercial construction, industrial construction, interior design, project management',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <body>
//         <Header />
//         {/* <StickyHeader /> */}
//         <main>{children}</main>
//         <Footer />
//         <FloatingButtons /> 
//       </body>
//     </html>
//   );
// }


import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/Components/layout/Header';
import Footer from '@/Components/layout/Footer';
import StickyHeader from '@/Components/layout/StickyHeader';
import FloatingButtons from '@/Components/layout/FloatingButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Tripura Infra Developers | Best Construction Company in Hyderabad',
  description:
    '20+ years of excellence in residential, commercial & industrial construction. Quality, transparency & on-time delivery. Get free consultation.',
  keywords:
    'construction company hyderabad, residential construction, commercial construction, industrial construction, interior design, project management',
  verification: {
    google: 'gabvMASfnl4xrX1rn-i_8JEoCCCY-4fpcayqnv3bak0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/Logo/favicon-96x96.png" type="image/png" />
        {/* Optional: add Apple touch icon */}
        <link rel="apple-touch-icon" href="/Logo/logo.png" />
      </head>
      <body>
        <Header />
        {/* <StickyHeader /> */}
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}