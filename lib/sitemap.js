const fs = require("fs")

const globby = require("globby")
const prettier = require("prettier")

// meh, next config must be JS so this is in JS too

;(async () => {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc")
    const pages = await globby([
        "pages/**/[a-zA-Z]*.tsx",
        "data/**/*.mdx",
        "!pages/_*.tsx",
        "!pages/api",
    ])

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const path = page
                        .replace("pages", "")
                        .replace("data", "")
                        .replace(".tsx", "")
                        .replace(".mdx", "")
                        .replace("/index", "")
                    const route = path === "/index" ? "" : path
                    return `
                        <url>
                            <loc>${`https://pgvr.dev${route}`}</loc>
                        </url>
                    `
                })
                .join("")}
        </urlset>
    `

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: "html",
    })

    // eslint-disable-next-line no-sync
    fs.writeFileSync("public/sitemap.xml", formatted)
})()
