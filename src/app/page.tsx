import Link from 'next/link';
import Services from "./service/page"
import About from './about/page';
import ContactUs from './contact_us/page';
import AppDevelopment from "./service/app-development/page"
import WebDevelopment from "./service/website-development/page"
export default function Home() {
  return (
    <>
      <h1 >Home</h1>
      <Link href="/service">Our Services</Link>
      <br/>
      <Link href="/about">About Us</Link>
      <br />
      <Link href="/contact_us">Contact Us</Link>
    </>
  )
}
