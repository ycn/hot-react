#!/bin/sh

if [ $# -ne 1 ]; then
    echo "Usage: $0 <local/test/prod>"
    exit
fi

ENV=$1
LOCAL_HOME="/Users/andy"

cd src/

if [ ${ENV}x = "local"x ]; then

    DEPLOY_PATH="${LOCAL_HOME}/.fis-pure-tmp/www/hot-react"
    [ -d "${DEPLOY_PATH}" ] || mkdir -p ${DEPLOY_PATH}
    rm -rf ${DEPLOY_PATH}/*
    pure server start
    pure release -d ${ENV} -lomp --domains --watch

elif [ ${ENV}x = "test"x ]; then

    DEPLOY_PATH="${LOCAL_HOME}/www/html/hot-react"
    [ -d "${DEPLOY_PATH}" ] || mkdir -p ${DEPLOY_PATH}
    rm -rf ${DEPLOY_PATH}/*
    pure release -d ${ENV} -lomp --domains --watch

else

    pure release -d ${ENV} -lomp --domains --clean

fi
