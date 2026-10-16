#!/bin/bash

docker container stop aethereal-landing
docker container rm aethereal-landing
docker image rm aethereal-landing
docker build -t aethereal-landing .
# .env holds the Nuxt Studio OAuth secrets; it stays on the server and is never committed.
touch .env # an empty file still lets the container start if secrets are not set yet
docker run -d -p 4000:3000 --restart unless-stopped --env-file .env --name aethereal-landing aethereal-landing
