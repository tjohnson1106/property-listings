#! /bin/bash/

yarn build:server
heroku container:push web
heroku container:release web


# docker build -t thomas/air-init:latest .
# docker push thomas/air-init:latest
# ssh root@167.99.11.233 "docker pull thomas/air-init:latest && docker tag thomas/air-init:latest dokku/air-init:latest && dokku tags:deploy air-init latest"