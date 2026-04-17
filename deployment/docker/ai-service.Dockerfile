FROM node:20-alpine
WORKDIR /app
COPY deployment/services/ai-service-server.mjs ./server.mjs
ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000
CMD ["node", "server.mjs"]
