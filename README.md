# eco.mio Frontend Challenge


#### Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Tools](#tools)

---

### Description

This repo contains base code for the eco.mio frontend hiring challenge.

---

### Prerequisites

To build and run the different parts of this repository, following tools need to be installed:

- `Node.js` as a runtime environment

---

### Installation

To install the project and get it started, you have to perform the following steps:

1. Clone the repository
2. Run `npm i` in the repository folder to install the necessary dependencies
3. Run `npm run serve` to start the application on port `3000`

It runs without a backend, so you should be ready to go.

---

### Project Structure

The src folder of the project is structured as follows:

    src
    ├── assets
    ├── components
    ├── customizations
    ├── types
    └── views

The subfolders serve the following purpose:

- **assets:**
  - contains static assets (e.g. fonts or images)
- **components:**
  - contains individual components. The directory is divided into parent-components or views, in which specific components are used. This helps for readability, as for example all components that are only used in the history view are grouped together in the directory components/history
- **customizations:**
  - contains customizations of Material-UI components. Each component that should be customized has its own file (e.g. CardCustimization).
- **types:**
  - contains all custom types and interface used throughout project. For example the theme is specified here and can then be used in every component.
- **views:**
  - contains all the views.

---

### Commands

This is a list of useful commands for the project and a short explanation of what these commands do, when executed in the root folder of the project:

- `npm install` installs the necessary dependencies
- `npm run install:clean` deletes and reinstalls all dependencies
- `npm run serve` serves the application on port `3000`
- `npm run test` runs all tests of the project (not yet implemented)

---

### Tools

This is a list of tools, used in the project

- `Node.js:` runtime environment for JavaScript
- `npm:` package manager for node projects
- `React:` JavaScript Libraray for building component based user interfaces
- `TypeScript:` statically typed programming language, transpiled to JavaScript
- `ESLint:` linter for JavaScript and TypeScript projects
- `Prettier:` code formatter
- `Webpack:` module bundler for JavaScript projects
- `Jest:` testing library for JavaScript projects
