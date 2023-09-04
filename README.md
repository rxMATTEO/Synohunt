<p align="center">
<a href="https://www.synohunt.ru">
    <img src="https://www.synohunt.ru/_vercel/image?url=/img/download.webp&w=640&q=100" />
</a>
</p>

<br/>
<br/>

![GitHub top language](https://img.shields.io/github/languages/top/rxmatteo/synohunt?style=plastic&labelColor=%2342b883&color=%236f42c1)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/rxmatteo/synohunt/dev/nuxt/development?style=plastic&labelColor=%2300dc82&color=%23a581b8)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/rxmatteo/synohunt/dev/typescript/development?style=plastic&labelColor=bluecolor=%23a581b8)
<a href="https://www.synohunt.ru">
![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.synohunt.ru)
</a>
![GitHub deployments](https://img.shields.io/github/deployments/rxmatteo/synohunt/production)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/rxmatteo/synohunt)
![GitHub](https://img.shields.io/github/license/rxmatteo/synohunt)

- [Synohunt](#Synohunt)
    - [Getting Started](#getting-started)
        - [Clone](#clone-the-repository)
        - [Install dependencies](#install-dependencies)
        - [Configure](#configure-your-env-variables)
        - [Prisma](#set-up-prisma)
        - [Start dev server](#start-the-development-server)
        - [After build](#after-build)
    - [Features](#features)
    - [License](#license)

# Synohunt

Welcome to **Synohunt**, a free web application, fun and educational game for word lovers to test their knowledge of the languages.
It's allows users to create and solve challenges to find synonyms for words.
It supports two languages and three difficulty levels.

![img.png](img.png)

## Getting started

### **Clone the repository**

``
git clone https://github.com/rxMATTEO/Synohunt.git
``

### **Install dependencies**
```
cd synohunt
npm i
```

### **Configure your .env variables**

So, if you're looking for a development environment, create and set up `.env.development` and if you're building a production environment, set up `.env.production` 
by this template:

```
# GITHUB API (optional, it's your GitHub OAuth keys, but you can skip it if you don't have it)
GITHUB_CLIENT_PUBLIC=your_github_public_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# SQL
DATABASE_URL=your_database_url
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_database_user
POSTGRES_HOST=your_database_host
POSTGRES_PASSWORD=your_database_password
POSTGRES_DATABASE=your_database_name

# AUTH
AUTH_ORIGIN=your_auth_origin           # in development usually it's your localhost at 3000 port
VITE_AUTH_ORIGIN=your_vite_auth_origin # in development usually it's your localhost at 3000 port
NEXTAUTH_URL=your_nextauth_url         # in development usually it's your localhost at 3000 port
AUTH_SECRET=your_auth_secret           # hashed string

# ANALYTICS
GOOGLE_TAG=your_google_tag to analytics (optional)

# Replace the placeholders (your_github_public_client_id, your_github_client_secret, etc.) with the actual values for your environment variables. Additionally, ensure that you keep this file secure and do not share sensitive information.
```

### **Set Up Prisma**:

After configuring your database connection:
- Run migrations to create database tables:
```
npx prisma migrate dev
```

### **Start the Development Server**

``
npm run dev
``

### **After build**

Open your browser and visit `http://localhost:3000` to see Synohunt in action.

## Technologies Used

- **Nuxt 3**: The SSR framework for building this web application.
- **Vue 3**: The JavaScript framework for creating user interfaces.
- **Vite**: A fast and efficient build tool.
- **Typescript**: A typed superset of JavaScript for enhanced code quality.
- **Prisma**: A modern database toolkit for Node.js and TypeScript.
- **Tailwind CSS**: A utility-first CSS framework for building responsive designs.
- **PrimeVue**: A UI component library for Vue.js.
- **PrimeFlex**: A flexible CSS layout system for PrimeVue.
- **Pinia**: A state management solution for Vue 3.
- **RSA end-to-end encryption**: Used to secure user data and communication.

## Features

- **Create and solve challenges** to find synonyms for words.
- **Support for two languages**: - **English** and **Russian** for now.
- **Three difficulty levels**: **Easy**, **Medium** and **Hard**
- **End-to-End Encryption**: **RSA** secure
- **Easy to Use**: With a user-friendly interface and a vast database of words and synonyms, our online browser game offers endless hours of fun and learning. Join a vibrant community of language enthusiasts, compete for the top spot on the leaderboard, and discover just how expansive your vocabulary can be.
- **Points** and **Coins** system to track your progress and earn rewards.
- **Leaderboard**: Create a competitive element by displaying a leaderboard that ranks players based on their scores.
## License

Released under the [MIT license](LICENSE)