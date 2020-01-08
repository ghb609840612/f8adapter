FROM node:10.16.3

RUN ["npm", "install", "-g", "parse-dashboard"]

ADD config.json config.json

ENTRYPOINT [ \
  "parse-dashboard", \
  "--config", "config.json", \
  "--allowInsecureHTTP" \
]
