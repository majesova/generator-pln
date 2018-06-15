# Generador Pln
Pln aspnet boilerplate

# Requirements
This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. More information about Yeoman: http://yeoman.io/

# Installation
```
$ npm install -g generator-pln
```

# Usage
```
$ yo pln
```

# Get started

#### ASP.NET Core Application

- Open your solution in Visual Studio 2017 v15.3.5+ and build the solution.
- Select the 'Web.Host' project as the startup project.
- Check the connection string in the appsettings.json file of the Web.Host project, change it if you need to.
- Open the Package Manager Console and run an Update-Database command to create your database (ensure that the Default project is selected as .EntityFrameworkCore in the Package Manager Console window).
- Run the application. It will show swagger-ui if it is successful:

![alt text](https://github.com/ronymaychan/generator-pln/blob/master/images/Screenshot_1.png "PLN Swagger")

#### Angular Application

- Open a command prompt, navigate to the angular folder
- In your opened command prompt, run the following command:
```
$ npm start
```
- Once the application has compiled, you can go to http://localhost:4200 in your browser. You will see the login page

![alt text](https://github.com/ronymaychan/generator-pln/blob/master/images/Screenshot_2.png "Angular app")

# Login

You can now login to the application using the default credentials. The default username is 'admin' and the password is '123qwe'.

# Credits

Twitter: 

Blog: 

# Licence
MIT