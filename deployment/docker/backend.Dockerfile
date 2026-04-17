FROM node:20-alpine
WORKDIR /app
COPY deployment/services/backend-server.mjs ./server.mjs
ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000
CMD ["node", "server.mjs"]
