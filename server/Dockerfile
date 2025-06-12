# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with specific memory limits
ENV NODE_OPTIONS="--max-old-space-size=256"
RUN npm install --production=false --no-audit --no-fund --prefer-offline

# Copy source code
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install only production dependencies with memory limit
COPY package*.json ./
ENV NODE_OPTIONS="--max-old-space-size=128"
RUN npm install --only=production --no-audit --no-fund --prefer-offline

# Copy built application from builder stage
COPY --from=builder /app/server.js ./
COPY --from=builder /app/config ./config

# Set environment variables
ENV NODE_ENV=production

EXPOSE 5001

CMD ["node", "server.js"] 