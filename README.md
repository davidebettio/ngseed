## ngseed

### sample nginx config
```
server {
  listen 80;
  server_name myserver.net;

  root /mnt/app;
  index index.html index.htm;

  location /static/ {
       try_files $uri $uri/ =404;
  }

  location /api/ {
       proxy_pass http://127.0.0.1:8080;
  }
}
```
fish.json url prefix: http://i.istockimg.com/file_thumbview_approve/
