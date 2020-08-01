ARG NODE_IMAGE
FROM ${NODE_IMAGE}

WORKDIR /tmp/react-build

COPY public/ src/ package*.json ./

#RUN rm -rf package-lock.json
RUN npm install && npm run build


# Now build on top of the nginx image as source code is built
ARG FROM_IMAGE
ARG IMG_TYPE
FROM ${FROM_IMAGE}:${IMG_TYPE}

WORKDIR /var/www/

COPY --from=0 /tmp/react-build/build/* .
COPY conf/nginx.conf /etc/nginx

CMD ["nginx", "-g 'daemon off;"]