# App url


# Instruction to run app
* FRONTEND: 
```
cd client && yarn install && yarn start
```
* BACKEND 
```
yarn install && yarn start
```

# Command to import json data to mongo
```
mongoimport --uri "mongodb+srv://justa7:S2foQTFSXdw31UdY@cluster0.kir6w.mongodb.net/DreamCakeDB?retryWrites=true&w=majority" --collection products --drop --file products.json --jsonArray
```
