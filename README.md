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














- Command to build Angular app:
	cd frontend
	ng build --prod --outputPath=dist; rm -f ../public/*.js; rm -f ../public/*.css; rm -f ../public/*.ico; cp dist/*.js ../public/; cp dist/*.css ../public/; cp dist/*.ico ../public/; cp dist/index.html ../resources/views/index.html





