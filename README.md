# wannebo.dev

Personal website for Kristian Wannebo. Built with [Astro](https://astro.build), featuring dark mode, i18n (English, Norwegian, French), and a combined landing page with resume and about sections.

## Development

```sh
npm install
npm run dev
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the build locally                    |

## Docker

```sh
docker build -t wannebodotdev .
docker run -p 8080:80 wannebodotdev
```