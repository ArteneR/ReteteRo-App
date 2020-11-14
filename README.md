# ReteteRo - App component

Simple Angular + Laravel application for food recepies
(App (frontend) component of the application)


===========================================================



# Running the app:


RUN Angular app:
	ng serve

Open Angular app:
	http://localhost:4200/



===========================================================



# Useful links:

- Heroku app page: https://dashboard.heroku.com/apps/retete-ro-app

- Angular Docs: https://angular.io/docs

Other links:
- Run Angular app on Heroku: https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147
- Env vars with Angular: https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html



===========================================================



# Installation + steps for configuring project:


- Install Angular CLI globally
	npm install -g @angular/cli



- Install Angular app:
    ng new ReteteRo-App --skip-git
    (ReteteRo-App - name of the Angular project)



Heroku configuration:

- Make sure you have latest version of angular cli and angular compiler:
    npm install @angular/cli@latest @angular/compiler-cli --save-dev



- In your package.json, copy:
    "@angular/cli”: “1.4.9”,
    "@angular/compiler-cli": "^4.4.6",
    from devDependencies to dependencies



- Create postinstall script in package.json:
    Under “scripts”, add a “heroku-postinstall” command like so:
    "heroku-postbuild": "ng build --prod"



- Add Node and NPM engines:
    In package.json:
    "engines": {
        "node": "6.11.0",
        "npm": "3.10.10"
    }
    (replace versions with yours: node -v, npm -v)



- Copy typescript from devDependencies to dependencies:
    "typescript": "~4.0.2"



- Install Enhanced Resolve 3.3.0:
    npm install enhanced-resolve@3.3.0 --save-dev



- Install Server to run your app:
    npm install express path --save



- Create a server.js file in the root of the application and paste the following code:
    //Install express server
    const express = require('express');
    const path = require('path');

    const app = express();

    // Serve only the static files form the dist directory
    app.use(express.static(__dirname + '/dist/<name-of-app>'));

    app.get('/*', function(req,res) {
        
    res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
    });

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);



- In package.json, change start command to node server.js:
    "start": "node server.js"






===========================================================



# Heroku cheatsheet:


## Config vars:

- View current config vars:
    heroku config -a retete-ro-app
    heroku config:get APP_NAME - a retete-ro-app


- Set a config var:
    heroku config:set APP_NAME=MyApp -a retete-ro-app


- Remove a config var:
    heroku config:unset APP_NAME -a retete-ro-app



## View Logs:

- Latest logs:
    heroku logs --tail -a retete-ro-app


    



===========================================================



# Angular cheatsheet:


## Environment variables:

(https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html)

- In component.ts:
    import { environment } from './../environments/environment';
    ...
    appName = environment.appName;


- In component.html:
    <p>{{ appName }}</p>


- Run app with specific environment:
    Default:        ng serve
    Dev:            ng serve --configuration=dev
    Production:     ng serve --configuration=production




## Generating elements options:

- Omit creating a folder:
    --flat


    

## Components:

- Genereate component:
    ng generate component <component_name>



## Modules:

- Generate module:
    ng generate module <module_name>



## Services:

- Genereate service:
    ng generate service <service_name>



## Directives:





## Guards:

- Generate guard:
    ng generate guard <guard_name>



## Interfaces:

- Generate interface:
    ng generate interface <interface_name>