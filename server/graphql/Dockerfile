FROM node:10.16.3

ADD . .
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

ENTRYPOINT [ "node", "lib/index.js" ]
