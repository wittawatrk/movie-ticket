# Stage 1: Build the application
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine AS production
# Use 'node' user for security best practices
USER node
WORKDIR /usr/src/app

# Copy built application from 'build' stage
COPY --from=build --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=build --chown=node:node /usr/src/app/dist ./dist
# If you have an entrypoint script (e.g., for running migrations), copy it here and make it executable.
# COPY --from=build --chown=node:node /usr/src/app/entrypoint.sh ./entrypoint.sh
# RUN chmod +x ./entrypoint.sh

# Set environment variable
ENV NODE_ENV production

# Run the production build
CMD ["node", "dist/main.js"]
