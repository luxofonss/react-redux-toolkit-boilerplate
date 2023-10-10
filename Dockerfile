# 1. For build React app
FROM node:18-alpine AS development
# Set working directory
WORKDIR /app
#
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# Same as npm install
RUN npm ci
COPY . /app
ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]

FROM development AS build
RUN npm run build
# 2. For Nginx setup
FROM nginx:alpine
# Copy folder đã được build vào folder chạy của nginx.
COPY --from=build /app/dist/ /var/www/dist/

# Copy file cấu hình chạy cho nginx (file nginx.conf sẽ tạo ở bước tiếp theo)
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/nginx.conf

# Cài đặt curl cho câu lệnh check HEALTH
RUN apt-get update && apt-get install -y curl

# Kiểm tra trạng thái của container sau khi chạy
HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]


# # Copy config nginx
# COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=build /app/dist .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


