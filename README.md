# Prewired Website

Code for [prewired.org](https://prewired.org). Built using [Astro](https://astro.build).

## Structure

Each file in the `pages/` and `posts/` directories directly correspond to a webpage with their name: e.g. `child-protection.md` corresponds to [prewired.org/child-protection/](https://prewired.org/child-protection/).

Pages with a `.md` extension are simple Markdown files that should be straightforward to edit. MD files in the `pages/` directory are "regular" web pages and their layout is defined in `layouts/MDPageLayout.astro`. MD files in the `posts/` directory are blog posts and their layout is defined in `layouts/PostLayout.astro`. Adding a new blog post is as easy as adding a new MD file in `posts/` and committing your changes - the build process automatically adds it to the [News and Updates page](prewired.org/news/).

All MD files require a bit of *metadata* for them to work: a title, description, cover image, etc. Look at other files in the folder to see what is required. Note that for cover images, you should add the file name of an image in the `assets/photos/` folder - this ensures that the image is correctly optimised and displayed.

Some pages have a `.astro` extension instead of `.md` - these are generally more complex pages, requiring custom code beyond what Markdown offers. Read the [Astro documentation](https://astro.build) for more information on how these work.

General styles are defined in `styles/global.css` and local styles are applied using [TailwindCSS](https://tailwindcss.com).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                      | Action                                           |
| :--------------------------- | :----------------------------------------------- |
| `npm install`                | Installs dependencies                            |
| `npm start` or `npm run dev` | Starts local dev server at `localhost:4321`      |
| `npm run build`              | Build your production site to `./dist/`          |
| `npm run preview`            | Preview your build locally, before deploying     |
| `npm run astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`    | Get help using the Astro CLI                     |

## Dependencies

For easy maintenance, we try to keep our list of direct dependencies as minimal as possible.

* `typescript` - for type checking
* `astro` and `@astrojs/check` - base Astro libraries
* `@astrojs/sitemap` - automatically generates the sitemap files
* `astro-tunnel` - if enabled through the Astro dev toolbar, generates a URL that allows for previewing the website on different devices
* `@fontsource-variable/[...]` - optimised font libraries
* `tailwindcss` and `@tailwindcss/vite` - styling framework
* `link-preview-js` - automatically gets metadata for external websites on [News and Updates](prewired.org/news/)
* `@fec/remark-a11y-emoji` - processes MD pages to make all emoji accessible to screen readers
