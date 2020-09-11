#!/usr/bin/env sh

build_and_push_docker_image() {
    echo "======================================================================================================="
    echo "          Authentication in Docker Heroku Registry for Deploy                                          "
    echo "======================================================================================================="
    echo "$HEROKU_KEY" | docker login --username $HEROKU_OWNER_EMAIL --password-stdin registry.heroku.com

    docker build -t registry.heroku.com/$HEROKU_APP_NAME/web:latest .

    echo "====================================================================================================="
    echo "      Publishing Docker Image registry.heroku.com/$HEROKU_APP_NAME/web:latest in Heroku Registry ...        "
    echo "====================================================================================================="
    docker push registry.heroku.com/$HEROKU_APP_NAME/web:latest
}

build_and_push_docker_image
