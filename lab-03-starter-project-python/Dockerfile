FROM python:3.10-bullseye

WORKDIR /project

COPY build build

COPY spaceship spaceship

COPY requirements requirements

RUN python3 -m venv ./.venv

RUN . ./.venv/bin/activate

RUN pip install -r requirements/lock.txt

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8000"]

