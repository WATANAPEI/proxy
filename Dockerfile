FROM nginx
COPY favicon.ico /www/app/
COPY nginx/ /etc/nginx/conf.d
COPY public/ /www/app/
