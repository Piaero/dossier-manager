# MERN Stack Boilerplate for Heroku by Piaer

## MERN Stack

**MERN** is  a free and open-source JavaScript software stack for building dynamic web sites and web applications. The acronym stands for:

**M**ongoDB - document database. For Heroku deployment I am suggesting to keep database in cloud service, eg. MongoDB Atlas (https://www.mongodb.com/cloud/atlas)

**E**xpressJS - web framework for Node.js

**R**eact - a JavaScript library for building user interfaces (frontend)

**N**ode.js - back-end JavaScript runtime environment 


## Installation
1. Click on "Use this template" in web version of GitHub or traditionally clone this repository
2. Install Node.js: https://nodejs.org/en/
3. If you don't have, instal yarn trough npm (you should have installed npm by installing node.js): ```npm install --global yarn```
4. Run ```yarn install``` command on root directory but also in frontend folder
5. Database setting:

    **a) if you are using Cloud Database (e.g. MongoDB Atlas):**

        1) Create in .env file in root directory
        2) Using text editor input your MongoDB URI parameter to MONGODB_URI key (both separated by "="), example:
        MONGODB_URI=mongodb+srv://dbAdmin:TeStURIdsadsa@cluster0-slk2321.mongodb.net/test?retryWrites=true&w=majority
        3) Set the URI as parameter of key MONGODB_URI in "Config Vars" in Heroku App settings.
        4) More info here: https://zellwk.com/blog/crud-express-mongodb/
    **b) if you are hosting database locally:**

        1) in backend/server.js file input replace "process.env.MONGODB_URI" in MongoClient.connect() with your database URI 

    **c) if you don't have database yet:**

        1) in backend/server.js Remove MongoClient.connect function and chained then function:

            MongoClient.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true
            })
            .then(client => {
                const db = client.db('your_database_name')
                const countersCollection = db.collection('your_collection_name')
                console.log('Connected to Database')
            })
               
6. Change name and author of the project in package.json on root directory and in package.json inside frontend folder
7. Run backend and app with ```yarn dev``` on root directory

## Additional features

Stack is compatible with Heroku.com - free cloud platform allowing to host applications. You can set up deployment to Heroku from GitHub. 

## Additional dependencies

* dotenv - stores configuration properties in .env file. In this case we store MongoDB URI key in .env file in root directory. Don't upload that file!
* body-parser - parsing middleware. Incoming request bodies are available under the req.body
* concurrently - allows you to run the React app and Server at the same time
* nodemon - restarts server on file save (after change)

## Running the App

### yarn dev

Launches the React app and the server at the same time

### yarn client

Launches only the React app

### yarn server

Launches only the server (backend/server.js)

## Credits

This boilerplate is based on 2 articles:

* MERN configuration:
https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/

* MongoDB configuration based on cloud service MongoDB Atlas:
https://zellwk.com/blog/crud-express-mongodb/
