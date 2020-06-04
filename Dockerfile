FROM node:latest
WORKDIR /usr/src/web

EXPOSE 3000
CMD ["sh", ".conf/init/dev.sh"]
