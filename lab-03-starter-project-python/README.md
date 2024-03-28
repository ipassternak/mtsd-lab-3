# Python Web App

## Getting Started

### Requirements:

To test the app, ensure you have the following dependencies installed on your system:

- [Docker](https://www.docker.com/) (version 24.0.5 or later)
- A shell environment for running scripts

### Installation:

```shell
git clone https://github.com/ipassternak/mstd-lab-3.git
cd mstd-lab-3/lab-03-starter-project-python
docker build -t <USERNAME>/python-web-app:latest .
docker run -d -p 8000:8000 --name python-web-app <USERNAME>/python-web-app:latest
```

## Usage:

Now you can go to [web page](http://localhost:8000) and test the API using the web interface
