
## Tech 💻
- <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>&emsp;  [Typescript] - JavaScript with syntax for types.
- <a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>&emsp;  [Node.js](https://nodejs.org/) - Javascript Runtime
- <a href="https://prisma.io/" title="Prisma"><img src="https://www.prisma.io/images/favicon-32x32.png" alt="Vite" width="21px" height="21px"></a>&emsp; [Prisma] -  Open source next-generation ORM
- <a href="http://expressjs.com" title="Express"><img src="http://expressjs.com/images/favicon.png" alt="Vite" width="21px" height="21px"></a> &emsp;[Express] - Node JS Open-source framework for manage servers and routes
- <a href="https://www.sqlite.org/index.html" title="# SQLite"><img src="https://www.prisma.io/prisma-in-your-ecosystem-page/sqllite.svg" alt="MySQL" width="21px" height="21px"></a>&emsp; [SQLite] - SQL database engine.


## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

### Steps to Setup

 1. Clone the application
	```sh
	git clone https://github.com/atendim/backend.git
	```
 2.  Run a migration to create your database tables with Prisma Migrate
		```sh
		cd backend
		npx prisma migrate dev --name init
    	```
 3.  Create `.env` file and set the JWT_SECRET key, like:
		```javascript
		JWT_SECRET=your_key
    	```
