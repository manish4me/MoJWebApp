Mojwebapp
===================

A very simple demo application using the MEAN stack. To set up and run, read:

Please download the code using download zip button from Github Repository. Exctract the contents to a folder say 'c:\mojwebapp'
*Assuming Node Js and MongoDB is already installed on the system where code needs to bes tested. if not please download and install Node Js from https://nodejs.org/ and MongoDB from https://www.mongodb.org/downloads#production

Open command prompt and change directory to c:\mojwebapp using cd mojwebapp
Enter command 'npm install'
(This would install the required dependency js in node_modules directory)

Enter 'npm start' in the command prompt
(This would start the application at http://localhost:3000)

Open any available browser and paste the address 'http://localhost:3000' in the addressbar. That's it the test application is available.


To run unit test open a separate command prompt window keeping the existing command window untouched
Enter 'mocha' in the command prompt and it should run the unit tests for country list retrieval and mongo db persistance of user data. 