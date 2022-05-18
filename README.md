# Dynamically Set Angular Environment Variables in Docker


## build docker image

`
docker build . -t ng-docker-env-variable
`

## run docker container
`
docker run -d -p 8080:80 --rm --name ng-docker-env-variable ng-docker-env-variable
`

`
docker run -d -p 8080:80 --rm --name ng-docker-env-variable -e ENV=prod -e BASE_URL=/api ng-docker-env-variable
`

## stop container

`docker stop <containerid>`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

![Demo](/screenshot/one.png)

## Reference
https://developers.redhat.com/blog/2021/03/04/making-environment-variables-accessible-in-front-end-containers#multi_stage_build_containers