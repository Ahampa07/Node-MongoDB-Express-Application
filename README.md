# Node Js-MongoDB-Express App

This application handle 2 level friend. 
to run this application go to home directory of app.js file. 

Application uses mongodb database. To modify the mongodb database URL goto app.py 

To install dependencies run the below command
```bash
npm install 
node app.js
```

to get all users list goto below URL
```bash
localhost:1234/users/findall
```

to get all blogs list goto below URL
```bash
localhost:1234/blogs/findall
```

to get level 1 and level 2 friends go to below URL respectively
```bash
localhost:1234/users/{username}/1
localhost:1234/users/{username}/2
```

