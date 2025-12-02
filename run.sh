#!/bin/bash
docker build -t ubuntu-25.04-sim ./docker
docker run -it ubuntu-25.04-sim
