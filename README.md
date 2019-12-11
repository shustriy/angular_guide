## INSTALLATION

1. Create build
docker build -t angular_guide_image:v1 .

2. Create a new conatiner instance and remove it after work (--rm)
#docker run -it -v ${PWD}:/app -p 4201:4200 --rm angular_guide:v1 bash
docker run -it --name angular_guide_container -v ${PWD}:/app -p 4201:4200 angular_guide_image:v1 bash

3. Inside container
 - npm install -g @angular/cli
 - npm install
 - ng serve --host 0.0.0.0

After installation
 - docker start angular_guide_container && docker exec -it angular_guide_container bash
 - ng serve --host 0.0.0.0

## INFO

# Create new component
 - ng generate component NameEditor

#Link to example
https://mherman.org/blog/dockerizing-an-angular-app/

#Link to docker's commands
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

## IMAGES
#Show all images
docker images -a

#Remove image
docker rmi Image Image

#Remove all images
docker rmi $(docker images -a -q)

## CONTAINERS
#Show all containers
docker ps -a

#Remove container
docker rm ID_or_Name ID_or_Name

#Remove all containers
docker rm $(docker ps -a -f status=exited -q)