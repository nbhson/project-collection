# Angular User Management

## Setup enviroment

- **Angular CLI**: >= `14.0.6` (npm install -g @angular/cli@^14.0.6)
- **Node**: >= `16.19.0`

## Run App

- Step 1: `npm install` to install the dependencies
- Step 2: `npm run start:db` to run the database
- Step 3: `npm start` to start the application

## Exercise:

> To understand the architecture of Angular

- Complete update function: 
  + Update the user's information on the table
  + Must show the user when reloading the user update page
  + Validation (exist username/mail)
  
- Complete delete function: 
  + There must be a confirmation popup
  + Ability remove the user from the table right away

- Use custom directive:
  + To highlight the email field (font bold & red color)

- Use custom pipe:
  + Optimized display if the name field is too long (angular exercise -> angular execr...)

## Challenges:

> To flexibility in handling and binding data

- Use Pipe to complete **search** function
- Use Material table to complete **sort** function

## Reference

Material: https://material.angular.io/
Material Icon: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
Json Server: https://github.com/typicode/json-server
Jest: https://jestjs.io/
Prettier: https://prettier.io/