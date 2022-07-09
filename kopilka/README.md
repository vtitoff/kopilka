Копилка для отслеживания сбережений на различные покупки

docker run --rm -it -v c/Users/vtito/PycharmProjects/kopilka/kopilka/backend:/d kopilka_backend bash

uvicorn app:app --reload

docker run --rm -it -p 8081:8081 -v c/Users/vtito/PycharmProjects/kopilka/kopilka/backend:/d kopilka_backend bash
uvicorn app:app --reload --host 0.0.0.0 --port 81
docker-compose up