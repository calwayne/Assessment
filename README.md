# Assessment

__Task 2

#Pre-requistes: Install below dependencies than run by command "npx cypress run" inside the assessment folder after pull from github.

npm install nodejs
npm install cypress --save-dev
npx cypress run

__Notes: Browser driven was set to chrome by default. Can be easily modified inside package.json file in this part:__

  "scripts": {
  
    "test": "npx cypress:run",
    
    "iframeeditor": "cypress run -b chrome -s 'cypress/integration/Task2.1/iframeEditor-Method1.js'",
    
    "editor": "cypress run -b chrome -s 'cypress/integration/Editor-Method2.js'",
    
    "jsalert": "cypress run -b chrome -s 'cypress/integration/JavascriptAlert.js'",
    
    "jsconfirm": "cypress run -b chrome -s 'cypress/integration/JavascriptConfirm.js'",
    
    "jsprompt": "cypress run -b chrome -s 'cypress/integration/JavascriptPrompt.js'",
    
    "sortabletables": "cypress run -b chrome -s 'cypress/integration/SortableTables.js'",
    
    "xhr_req": "cypress run -b chrome -s 'cypress/integration/Task2.2/xhr_request.js'",
    
    "xhr_route": "cypress run -b chrome -s 'cypress/integration/Task2.2/xhr_route.js'",
    
    "xhr_update": "cypress run -b chrome -s 'cypress/integration/Task2.2/xhr_update.js'"
    
  },

You may run the test locally according to test scenario upon installed dependecies mentioned earlier.

__To verify my codings:

Type following commands in your terminal based on the questionsheet in PDF file:__

__2.1 Browser Driven Functional Testing

Write at least one scenario for each of the components listed below and create browser driven automated tests to test them.__

1. Editor - ​http://the-internet.herokuapp.com/iframe

2. Alerts - ​http://the-internet.herokuapp.com/javascript_alerts

3. Sortable Table - ​http://the-internet.herokuapp.com/tables
      
__2.2 REST API automation Testing__

Create automated tests for the below endpoints from the site ​https://reqres.in/ 

1. List Users

2. Create 

3. Update

__CYPRESS COMMANDS__

__2.1.1 Editor__

npm run iframeeditor

__2.1.2 Alerts__

npm run editor

npm run jsalert

npm run jsconfirm

npm run jsprompt

__2.1.3 Sortable Table__

npm run sortabletables

__2.2.1 List Users__

npm run xhr_req

__2.2.2 Create__

npm run xhr_route

__2.2.3 Update__

npm run xhr_update
