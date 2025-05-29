# Catalog

This project is a car catalog application built with Vue.js and Vuetify. It allows users to browse and view details of various cars, with features such as filtering, sorting, and detailed car pages.

## Project Setup

To get started with the project, follow these steps:

### Install Dependencies
```bash
npm install
```

### Compiles and Hot-reloads for Development
```bash
npm run serve
```

### Compiles and Minifies for Production
```bash
npm run build
```

### Lints and Fixes Files
```bash
npm run lint
```

## Environment Variables

### VUE_APP_BASE_URL
- **Description**: This environment variable is used to set the base URL for API requests. It allows the application to dynamically adjust the API endpoint based on the environment (development, production, etc.).
- **Default Value**: `http://localhost:3000`
- **Usage**: Define this variable in a `.env` file at the root of the project.

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
