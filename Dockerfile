FROM klakegg/hugo:ubuntu as builder

RUN apt-get update -y

RUN apt-get install -y git

WORKDIR /src

COPY . /src

ENV HUGO_ENV=production
ARG HUGO_BASEURL=/
ENV HUGO_BASEURL=${HUGO_BASEURL}

RUN git submodule update --init --recursive && hugo version && hugo --minify -b ${HUGO_BASEURL}


FROM nginx

COPY --from=builder /src/public /app

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
