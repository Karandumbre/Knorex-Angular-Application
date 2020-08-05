Import the json data from the local file system to the database by entering the below command

mongoimport --db database_name --collection collection_name --file <file_path>/<file_name>.json --jsonArray

In my case

mongoimport --db test --collection knorex --file knorex-demo/src/assets/country.json --jsonArray


To run the knorex-demo

step 1
    Navigate to the folder
step 2
    Install all the node_modules file by running command 'npm install'
step 3
    Then in terminal use command 'ng serve'
step 4
    Open the browser and navigate to the URL : http://localhost:4200


To run the server

Step 1:
    Navigate to the folder server
Step 2:
    Install all the node_modules file by running command 'npm install'
 step 3
    Then in terminal use command 'npm start'

