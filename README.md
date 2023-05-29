# News Application

News Application powered by the NewsAPI.org API. Built with Vue.js, TypeScript, Vuetify, and Vuex

## Run Locally

Clone the project

```bash
  git clone https://github.com/norshehe/news-app
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## Run Using Docker

Install Docker

```bash
  You can download and install Docker from the official website: https://www.docker.com/get-started
```

Clone the project

```bash
  git clone https://github.com/norshehe/news-app
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn
```

Build the Docker image

```bash
  docker build -t news-application .
```

Run application

```bash
  docker run -it -p 8080:80 news-application
```

## Environment Variables

To run this project, you will need to add the following environment variables value to your .env file

Register and generate your API Key from NewsAPI official website: https://newsapi.org/

`VITE_NEWS_API_KEY`
