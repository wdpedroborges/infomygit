![badge](https://img.shields.io/github/watchers/wdpedroborges/infomygit?style=social)
![badge](https://img.shields.io/github/stars/wdpedroborges/infomygit?style=social)
![badge](https://img.shields.io/github/license/wdpedroborges/infomygit)
![badge](https://img.shields.io/badge/powered%20by-vite-blue)
![badge](https://img.shields.io/badge/powered%20by-react.js-blue)
![badge](https://img.shields.io/badge/powered%20by-typescript-blue)
![badge](https://img.shields.io/badge/powered%20by-sass-blue)

# Info My Git
## A simple usage of the Github API to extract info from my Github page

The Github API provides an easy way to extract information from my Github page. By accessing the API, I can gather data about my repositories, commits, pull requests, and more. This data can be used to automate tasks or gain insights into my coding habits and productivity. With this simple usage of the Github API, I can streamline my workflow and make the most out of my coding activity. The app is also responsive, adapting to different screen sizes, and provides a seamless user experience on both desktop and mobile devices.

## Live Demo

wdpedroborges.github.io/infomygit

## Features

- Extract data using Github API
- Use the data and name of the repository to crate badges

## Tech

- Vite
- React.js
- Typescript
- [MUI]((mui.com))

## Installation

Clone the repository:

```bash
git clone https://github.com/wdpedroborges/infomygit
```

For production:

```sh
cd infomygit
npm install
npm run dev
```

Debug in Typescript:

```bash
tsc --noEmit --watch
```

Build:

```bash
npm run build
```

## Deploy

- Add to vite.config.js:

```bash
base: "/<repo>/"
```

- Then:

```bash
npm install gh-pages --save-dev
```

- Add to package.json

```bash
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...
```

## License

This project is licensed under the MIT License. Please see the LICENSE file for more details.