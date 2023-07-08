import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import Modal from '@/Components/Modal';
import { Call, Whatsapp } from '@/Components/FixedIcons/Whatsapp';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  process.on('uncaughtException', function (err) {
    console.log(err);
}); 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        {children}
        <Analytics />
        <Footer />
        <Modal/>
        <Whatsapp/>
        <Call/>
      </body>
    </html>
  )
}
