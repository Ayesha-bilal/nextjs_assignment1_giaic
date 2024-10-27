import exp from "constants"
import Link from "next/link"
import AppDevelopment from "./app-development/page"
import WebDevelopment from "./website-development/page"

function Services() {
    return (
      <>
        <h1><u>Our Services</u></h1>
        <p>We provide Variery of services including </p><Link href="/service/app-development"> App development </Link>
        <p>and </p>
        <Link href="/service/website-development"> Web development</Link>
      </>
    )
  }

export default Services  