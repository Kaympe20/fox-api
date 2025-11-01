# `fox-api`

An API that can either directly return a random raw image of a fox using base64 or return a random URL of an image of a fox.

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)

---

I made this project because of a friend's message saying there needed to be one. All images in the project are courtesy of her.

The project uses [Nuxt 4](https://nuxt.com/) and the `fs` api in node. In the future, I would like a slack bot that automatically takes images posted by the friend in question and adds them to the folder, although that is not yet implemented.

It was really hard working with the local filesystem, espcially as development/source repository locations are not the same as production locations. Another really hard part was figuring out how to directly send image data as an API response.

<details>
<summary>Development</summary>
Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
</details>
