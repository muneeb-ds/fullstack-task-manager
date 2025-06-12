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

# Build the application with memory limit
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve with specific memory limits
ENV NODE_OPTIONS="--max-old-space-size=128"
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/build ./build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"] 