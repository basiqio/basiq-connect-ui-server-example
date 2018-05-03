# Basiq Webview integration server example


## Installing
To run the package you should have nodemon installed

```npm i -g nodemon```

```npm install```

## Running

Replace the ```YOUR_API_KEY``` in ```authentication.js``` file with your
API key which will be used to perform actions.

Because the node server listens to the port 80 you need to run
index.js using an account with elevated priviledges or using sudo. If you
want to change the port you can do it in ```index.js```.

```bash
sudo nodemon index.js
```

The app should listen to the specified port and everything should work.