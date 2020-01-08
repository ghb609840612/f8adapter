FROM node:10.16.3

RUN ["npm", "install", "-g", "parse-server"]

ADD . .
RUN [ "npm", "install" ]
RUN [ "npm", "run", "build" ]

ENTRYPOINT [ "parse-server", "config.json" ]
