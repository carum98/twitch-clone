#!/bin/sh

http-server ./dist -p $PORT & 

node server.js &

wait -n

exit $?
