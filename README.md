
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
```
    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://localhost:25543;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }

    location /api {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://localhost:25544;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
```

Updates: Can be realized with re-building the docker containers `docker-compose build` and re-starting them `docker-compose up -d`
## Contribution
If you would like to contribute to the development of this digital assistant, please fork the repository and submit a pull request. All contributions are welcome!
