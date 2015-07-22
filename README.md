#Projects Directory
Backbone, Node and MongoDB CRUD Application

Hosed on Digital Ocean with dokku

[Project Directory](http://projects.joe-burton.com)

```
// Setup Dokku
git remote add dokku dokku@projects.joe-burton.com:projects
git add .
git commit -m "firtst commit"
git push dokku master

```

--------------------------------------------------------------

```
// Install MongoDB on Digital Ocean
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

#Installing Dokku MongodDB Plugin
https://github.com/jeffutter/dokku-mongodb-plugin

git clone https://github.com/jeffutter/dokku-mongodb-plugin.git /var/lib/dokku/plugins/mongodb
dokku plugins-install
```

```
// Once the DigitalOcean dokku instance is setup ssh to the box create and associate a database with the app

// Create a database and associate it with app: dokku mongodb:create <app> <database>
dokku mongodb:create projects projectsdb

// Link database to app - dokku mongodb:link <app> <database>
dokku mongodb:link projects projectsdb

// Delete database app - dokku mongodb:delete <app> <database> 
dokku mongodb:delete projects projectsdb 

// Config - retrive environment variables for connecting your database
dokku config projects
```

```
// MongoDB Query stuff: 
$ dokku mongodb:console
$ db.projects.find().pretty()
```

```
// Start app locally
cd ~/Sites/projects
DEBUG=myapp npm start
```

```
// References
	- setup dokku, http://markrabey.com/2015/02/08/express-site-with-digital-ocean-and-dokku/ 
	- mongodb setup, https://www.youtube.com/watch?v=xpD9AOcWlgc
	- http://pythonhackers.com/p/jeffutter/dokku-mongodb-plugin
	- https://github.com/jeffutter/dokku-mongodb-plugin
	- http://stackoverflow.com/questions/24853848/deploying-node-js-app-with-mongodb-with-dokku-on-digital-ocean
	- https://www.andrewmunsell.com/blog/dokku-tutorial-digital-ocean
```
