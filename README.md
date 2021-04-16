# Dashboard Backend

## Intro

The back-end component of the group project involves building a backend application that reads the 'slimmed down' data from the sub-database and formats it into a format more readable by the frontend application. This application would be built using JavaScript.

## Instructions

To get the application running from the backend you need the follwing tools installed on your system:

- mysql Ver 8.0.0 and above (https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html)
- node js (https://nodejs.org/en/download/)

To start up the application after installing all needed libraries follow the instruction below and run the command in your terminal

- cd /DASHBOARD-BACKEND
- npm install
- create a .env file and copy fields found in the .env.sample file into it

To Set up mysql for your application go through the following steps after installing it

- create a new database with the name keele
- copy the content of the sql dump provided into the newly created database

To Set up your environment correctly

- change the keys in the .env to match your system configuration
  -- NODE_ENV=development
  -- SQL_URI=localhost
  -- SQL_PASSWORD=your_mysql_password
  -- SQL_USERNAME=root
  -- SQL_DATABASENAME=keele

To Run the Application

- cd /DASHBOARD-BACKEND
- node index.js

To See a list of avaliable apis follow --> https://documenter.getpostman.com/view/14938451/Tz5wVZF6

## Stuck?

If you get stuck, send us an email (x4z22@students.keele.ac.uk)

## Helpful resources

[For fixing Mysql path error](https://www.youtube.com/watch?v=-rzQv9DLfDo)
[A nice to have IDE](https://code.visualstudio.com/download)
[Existing Repo](https://github.com/TVCC-GROUP2/Dashboard-Backend.git)
