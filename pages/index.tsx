import BlogListItem from "@/components/BlogListItem"
import Divider from "@/components/Divider"
import ProjectCard from "@/components/ProjectCard"
import Title from "@/components/Title"

export default function Home() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl tracking-tight font-bold mb-4">Hello there 👋</h1>
            <p className="mb-16 text-secondary">
                My name is Patrick and I'm a web developer with a masters degree in Business
                Informatics from the University of Mannheim. Now I work @
                <a className="font-bold" href="https://tanso.io" target="_blank">
                    Tanso
                </a>{" "}
                where we enable businesses to reach climate neutrality by making sustainability
                accounting and management as integrated, transparent and verifiable as financial
                accounting.
            </p>

            <Title variant="h2" className="mb-4">
                New Posts
            </Title>

            <BlogListItem
                title="Quick Tip: Take advantage of the official Next.js examples"
                summary="Have you ever spent too much time trying to set something up with Next.js? Hopefully this quick tip can help you in the future."
                slug="quick-tip-nextjs"
            />
            <BlogListItem
                title="Build a Linktree clone in under 1 hour with Strapi, Next.js and GraphQL"
                summary="Building a basic Linktree clone seems rather simple which is perfect for showcasing a bunch of technologies and how they work together. Strapi, GraphQL and Next.js are the main building blocks for this project while Tailwind and GraphQL Codegen help with efficiency and developer experience."
                slug="linktree-clone"
            />
            <BlogListItem
                title="How to get started with Web Development on Windows with the WSL in 2021"
                summary="In this guide you will learn how to install what I consider to be close to the perfect web development setup for Windows. This includes using the Windows Subsystem for Linux, Windows Terminal, the Node Version Manager as well as some tips and tricks along the way."
                slug="webdev-setup"
            />

            <Title variant="h2" className="mb-4 mt-8">
                Projects
            </Title>
            <ProjectCard
                title="Synk.so"
                description="Easily import emails to Notion."
                href="https://synk.so/"
                icon="synk"
            />
            <ProjectCard
                title="Music Mash"
                description="Invite other people and this app generates a Spotify playlist according to the top tracks of each one."
                href="https://music.codingcastle.dev/"
                icon="musicmash"
            />
            <ProjectCard
                title="Flötenbot"
                description="Self-hosted Discord Bot that can play music from Spotify and Youtube. By self hosting the bitrate is higher than the one of other public bots which was a pain point for us."
                href="https://github.com/patrickgoeler/floetenbot/"
                icon="flute"
            />
            <ProjectCard
                title="LaunchX"
                description="Shows upcoming SpaceX launches in an easy fashion."
                href="https://space.codingcastle.dev/"
                icon="launchx"
            />
        </>
    )
}
