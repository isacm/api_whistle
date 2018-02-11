# Whistle API
## Environment setup 

#### Requirements

•  MongoDB 

  • Installation guide: https://docs.mongodb.com/manual/administration/install-community/
  
•  NodeJs

  • Installation guide: https://nodejs.org/en/download/package-manager/


## Run commands
#### Start mongo service
```
$ mongod
$ mongo
```
#### Open project directory
```
$ cd api_whistle/whistle
```
#### Do this only on the first run
```
$ npm install
```
#### Start node service
```
$ node .
$ Load url on web browser to access explorer
```

#Configuration of sendgrid in a home machine
```
$ echo "export SENDGRID_API_KEY='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'" > sendgrid.env
$ source ./sendgrid.env
```

##Note
Do:
```
$ npm install --save sendgrid
$ npm install --save @sendgrid/mail
```