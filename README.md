
#Install MongoDB
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

#Installing Dokku MongodDB Plugin
https://github.com/jeffutter/dokku-mongodb-plugin

git clone https://github.com/jeffutter/dokku-mongodb-plugin.git /var/lib/dokku/plugins/mongodb
dokku plugins-install

#Start MongoDD
dokku mongodb:start

#Create a database and associate it with app dokku mongodb:delete <database> <project>
dokku mongodb:create projects projects

#Remove database
dokku mongodb:delete projects projects

#Config
dokku config projects

MONGODB_DATABASE: projects-production
MONGODB_HOST:     172.17.0.167
MONGODB_PASSWORD: c1UzdDg0bkU0T2JZQUdLRFQ2ajBCU3dyZGpLNmxnNWVObGMrZm41cEhZST0K
MONGODB_PORT:     27017
MONGODB_USERNAME: node-app
MONGO_URI:        mongodb://node-app:c1UzdDg0bkU0T2JZQUdLRFQ2ajBCU3dyZGpLNmxnNWVObGMrZm41cEhZST0K@172.17.0.167:27017/node-app-production
MONGO_URL:        mongodb://node-app:c1UzdDg0bkU0T2JZQUdLRFQ2ajBCU3dyZGpLNmxnNWVObGMrZm41cEhZST0K@172.17.0.167:27017/node-app-production


Query stuff: 
$ dokku mongodb:console
$ db.projects.find().pretty()


#References
	- setup dokku, http://markrabey.com/2015/02/08/express-site-with-digital-ocean-and-dokku/ 
	- mongodb setup, https://www.youtube.com/watch?v=xpD9AOcWlgc
	- http://pythonhackers.com/p/jeffutter/dokku-mongodb-plugin

https://github.com/jeffutter/dokku-mongodb-plugin
http://stackoverflow.com/questions/24853848/deploying-node-js-app-with-mongodb-with-dokku-on-digital-ocean
https://www.andrewmunsell.com/blog/dokku-tutorial-digital-ocean
