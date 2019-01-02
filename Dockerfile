FROM nginx

RUN mkdir -p /var/logs/

COPY public/ /pub
COPY nginx/server.conf /etc/nginx/server.conf

CMD ["nginx", "-c", "/etc/nginx/server.conf", "-g", "daemon off;"]

EXPOSE 80
