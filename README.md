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

`VITE_NEWS_API_URI = https://newsapi.org/v2`

`VITE_NEWS_API_KEY`

## Timeline

May 25, 2023

- Set up project environment

- Organize folder structure

- Create different services

May 26, 2023

- UI/UX planning and designing

- Creating API Service (Top Headlines, Sources, Broken Top Headline API)

- Short documentation review on Vuetify

- Converting design to components

May 27 - 28, 2023

- Creation of headline page

- Creation of article details page

- Reorganizing component strucutres

- Removing warning messages via yarn lint

- Dockerized the application
