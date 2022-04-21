FROM nginx:latest
RUN ["mkdir","-p","/var/www/dfsite"]
COPY www/* /var/www/dfsite/
