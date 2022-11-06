# welchcanavan.com

## TO-DO

- finish organizing layouts
- add typography theme
- add color theme
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  - https://gitlab.com/welchcanavan/www-site/-/blob/master/assets/styles/global/vars/theme.scss
- favicon
- page title

## notes

- CSS
  - https://docs.astro.build/en/guides/styling/#postcss
  - https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting
  - https://github.com/tokencss/tokencss?ck_subscriber_id=1672975617
- images
  - https://cloudinary.com/cookbook/resize_an_image
- ideas
  - https://www.youtube.com/watch?v=F18oy48jkrk

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
