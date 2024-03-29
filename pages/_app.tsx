import { AppProps } from "next/app"
import "@/styles/globals.css"
import "@/styles/dracula.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "next-themes"
import Head from "next/head"
import React, { useEffect } from "react"
import MDXComponents from "@/components/mdx/Index"
import { MDXProvider } from "@mdx-js/react"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"
import splitbee from "@splitbee/web"

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            splitbee.init({
                apiUrl: "/sb-api",
                scriptUrl: "/sb.js",
            })
        }
    }, [])
    return (
        <ThemeProvider attribute="class">
            <MDXProvider components={MDXComponents}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link rel="preconnect" href="https://cdn.usefathom.com" crossOrigin="" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/static/icons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link rel="shortcut icon" href="/static/icons/favicon.ico"></link>
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta
                        name="msapplication-config"
                        content="/static/icons/browserconfig.xml"
                    ></meta>
                    <meta name="theme-color" content="#ffffff"></meta>
                </Head>
                <DefaultSeo {...SEO} />
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </MDXProvider>
        </ThemeProvider>
    )
}
