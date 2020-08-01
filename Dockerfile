# top half is to run the build and generate the prod build
ARG NODE_IMAGE
ARG FROM_IMAGE
ARG IMG_TYPE
FROM ${NODE_IMAGE}

WORKDIR /tmp/react-build

COPY public/ ./public/
COPY src/ ./src/ 
COPY package.json .

RUN npm install

RUN npm run build

#---------------------------------

# Now build on top of the nginx image as source code is built
FROM ${FROM_IMAGE}:${IMG_TYPE}

WORKDIR /var/www/

COPY --from=0 /tmp/react-build/build/ ./
COPY conf/nginx.conf /etc/nginx

CMD ["nginx", "-g 'daemon off;"]