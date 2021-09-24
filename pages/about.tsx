import Link from "@/components/Link"
import { NextSeo } from "next-seo"

export default function About() {
    return (
        <div className="prose dark:prose-light lg:prose-lg">
            <NextSeo
                title="About Me - Patrick Göler von Ravensburg"
                canonical="https://pgvr.dev/about"
                openGraph={{
                    url: "https://pgvr.dev/about",
                    title: "About Me – Patrick Göler von Ravensburg",
                }}
            />
            <h1>About Me</h1>
            <p>
                Hey I'm Patrick Göler von Ravensburg, a business informatics student from
                Schwetzingen, Germany. My studies are coming to an end though, as I'm working on my
                master thesis in the area of microservices.
            </p>
            <h2>Work Experience</h2>
            <p>
                I started to work very early during my studies to complement the curriculum with
                hands-on experience and industry practice. All positions were as a working student
                which allows me to work full-time during the semester break (like an internship) and
                continue working with reduced load during the semester.
            </p>

            <Link href="https://mindlantic.com/">
                <h4>Mindlantic</h4>
            </Link>
            <small>
                <strong>May 2021 - Now</strong>
            </small>
            <ul>
                <li>
                    Lead the development of the Mindlantic application (B2B & B2C) with a strong
                    focus on Developer Experience
                </li>
                <li>Design a scalable, cloud-based architecture for multiple environments</li>
                <li>
                    Create multiple CI/CD pipelines to ensure a rock-solid release cycle and
                    increased productivity with preview deployments
                </li>
            </ul>

            <Link href="https://sap.com/">
                <h4>SAP</h4>
            </Link>
            <small>
                <strong>May 2021 - Now</strong>
            </small>
            <ul>
                <li>
                    Master Thesis: "Exploring the potential of Deno as a lightweight and
                    secure-by-default runtime for powering sensitive lifecycle actions within
                    Steampunk Control Plane"
                </li>
            </ul>

            <Link href="https://aioneers.com/">
                <h4>Aioneers</h4>
            </Link>
            <small>
                <strong>May 2020 - April 2021</strong>
            </small>
            <ul>
                <li>
                    Building a SaaS for closed-loop decision making in supply chains from the ground
                    up
                </li>
                <li>Assist in fundamental architecture and product design decisions</li>
                <li>Full-Stack development with Kubernetes, Node, Angular</li>
            </ul>

            <Link href="https://yasoon.com/">
                <h4>Yasoon GmbH</h4>
            </Link>
            <small>
                <strong>Feb 2020 - May 2020</strong>
            </small>
            <ul>
                <li>Mostly Frontend Development using React and an extensive Redux model</li>
            </ul>

            <Link href="https://sovanta.com/en/">
                <h4>Sovanta AG</h4>
            </Link>
            <small>
                <strong>Sep 2018 - Jun 2019</strong>
            </small>
            <ul>
                <li>
                    Building a custom CMS with Angular, Redux and Kubernetes (mostly Node services)
                </li>
                <li>
                    Chatbot design and interaction with DialogFlow, Microsoft Graph, Slack, SAP
                    Conversational AI and more
                </li>
            </ul>

            <Link href="https://www.apliconus.de/">
                <h4>APLICONUS GmbH</h4>
            </Link>
            <small>
                <strong>Apr 2016 - Aug 2018</strong>
            </small>
            <ul>
                <li>UWP app development for Windows 10</li>
                <li>PWA development using Angular and ASP.NET Core</li>
            </ul>
        </div>
    )
}
