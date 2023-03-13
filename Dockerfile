###############
# Build Stage #
###############
FROM razonyang/hugo:exts as builder
COPY . /src
# Install dependencies
RUN npm install
# Build site
RUN hugo --minify --gc --enableGitInfo

###############
# Final Stage #
###############
FROM razonyang/hugo:nginx
COPY --from=builder /src/public /site
