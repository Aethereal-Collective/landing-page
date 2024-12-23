#!/bin/bash

docker container stop aethereal-landing
docker container rm aethereal-landing
docker image rm aethereal-landing
docker build -t aethereal-landing .
docker run -d -p 4000:3000 --restart unless-stopped --name aethereal-landing aethereal-landing
