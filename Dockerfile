###############
# Build Stage #
###############
FROM klakegg/hugo:ext-ubuntu as builder

WORKDIR /src
COPY . /src

ENV HUGO_ENV=production
# Go proxy

# Install dependencies
RUN npm install
RUN npm install -g @fullhuman/postcss-purgecss rtlcss

# Build site
RUN GOPROXY=https://proxy.golang.com.cn,direct GO111MODULE=on hugo --minify

###############
# Final Stage #
###############
FROM nginx
COPY --from=builder /src/public /app
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
