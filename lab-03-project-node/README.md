# Node Todo App

## Getting Started

### Requirements:

To test the app, ensure you have the following dependencies installed on your system:

- [Docker](https://www.docker.com/) (version 24.0.5 or later)
- A shell environment for running scripts

### Installation:

```shell
git clone https://github.com/ipassternak/mstd-lab-3.git
cd mstd-lab-3/lab-03-project-node/infra
docker-compose up -d

# Or

cd mstd-lab-3/lab-03-project-node/todo
docker network create node-todo-network
docker run --network node-todo-network --name postgres_db -e POSTGRES_DB=todo -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
docker build -t <USERNAME>/node-todo-app:latest .
docker run --network node-todo-network --name node-todo-app -d -p 8080:8080 -e PORT=8080 -e DATABASE_URL=postgres://postgres:postgres@postgres_db:5432/todo <USERNAME>/node-todo-app:latest
```

## Usage:

Now you can go to [web page](http://localhost:8080) and test Todo API