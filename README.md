
![StalkingAId](https://stalkingaid.org/logo.png)

## Product not yet ready!
This project was developed for the [Tech Challenge](https://academy.unternehmertum.de/programs/tech-challenge) and is not production ready in any way!


This is a web-based digital assistant chatbot system built with Svelte and OpenAI. It is designed to empathize with victims of stalking.

## Features

- 24/7 personalized, empathic and intelligent assistant
- Anonymous & secure
- Zero obligations, offers buffet like possibilities, e.g. call/report to police, fill psychological symptoms list, contact oranizations such as [Weisser Ring](https://weisser-ring.de/english) / [Telefonseelsorge](https://www.telefonseelsorge.de/international-helplines/), start taking daily notes ("stalking diary") using [NO STALK](https://nostalk.de)

## Tech Stack

Svelte: A modern JavaScript framework for building web applications
OpenAI: A leading artificial intelligence research laboratory

## Deployment

### Getting Started
Clone the repository: `git clone https://github.com/wasnertobias/StalkingAId.git`

Do configure OpenAI-API-key in docker-compose.yml

Launch docker containers: `docker-compose up -d`

By default the frontend server runs locally on port 25543 and the backend server locally on port 25544. Both are not exposed to any external network interfaces. Thus more configuration (e.g. a HTTPS reverse Proxy using nginx) is needed. Example configuration:

## Contribution
If you would like to contribute to the development of this digital assistant, please fork the repository and submit a pull request. All contributions are welcome!
