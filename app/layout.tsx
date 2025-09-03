import './globals.css'
import { Inter } from 'next/font/google'

export const metadata={title:'Karthikeya Sahith Reddy - portfolio',description:'RKSR'}
const inter=Inter({subsets:['latin'],variable:'--font-inter'})
export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang='en' className={inter.variable}><body>{children}</body></html>)
}
