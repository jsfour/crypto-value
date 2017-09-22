FROM node:6.10.0

RUN mkdir -p /app/src/node_modules


ENV APP=/app \
    NODE_ENGINE=6.10.0 \
    NPM_ENGINE=3.10.10 \ 
    NODE_ENVIRONMENT=development

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /app/

WORKDIR $APP
ADD . $APP
RUN node_modules/typescript/bin/tsc
