# 💚 Electro Car Sales
This project is part of the Global Computer Applications course.
## 📄 Built with
##### 🤳 Frontend
 - [React](https://es.reactjs.org/)
 - [Chakra UI](https://chakra-ui.com/)
 - [create-react-app](https://create-react-app.dev/)
##### 🐱‍👤 Backend
 - [NodeJS](https://nodejs.org/es/)
 - [Express](https://expressjs.com/)
 - [MongoDB](https://www.mongodb.com/)
## 🚀 Quick Start
 1. **Install all dependencies:** Go to the root directory and run the following command.
```bash
npm install
```
 2. **Create the environment variables:** Go to the `api` directory and create an `.env` file with the following environment variables
```env
PORT=<write_port_here>
SECRET=<secret_here>
```
## ⚡ Available Scripts
In the project directory, you can run:

### `npm start`
Runs the API in the production mode. 

> Set the environment variable `NODE_ENV=production`.

### `npm run build`
Builds the app for production to the `build` folder.<br  />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br  />
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run dev:app`
Runs the App in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev:api`
Runs the API in the development mode. 

> Set the environment variable `NODE_ENV=development`.
> 
### `npm run analyze:app`
[Source map explorer](https://www.npmjs.com/package/source-map-explorer) analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.