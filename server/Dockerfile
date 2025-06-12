# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with space optimization
RUN npm install --production=false --no-audit --no-fund --prefer-offline --no-optional

# Copy source code
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production --no-audit --no-fund --prefer-offline --no-optional

# Copy built application from builder stage
COPY --from=builder /app/server.js ./
COPY --from=builder /app/config ./config

# Set environment variables
ENV NODE_ENV=production

EXPOSE 5001

CMD ["node", "server.js"] 