# ShopChap. Your #1 shopping application.

## What is "ShopChap?"

Shopchap is webapplication created and designed for everyone who wish to monitor their expenses on groceries, challenge existing spending and regain control over what they buy.

### Features and functionality

The ShopChap application is filled to the brim with usefull features meant to monitor, store and interpert your spending habits. These include:
- A list of all groceries within specified timeranges (year, month, week).
- Visualization of expenses on a certain category within a timerange (made with ApexCharts).
- Recommendations via an AI API (google gemini).
- ...

Basic functions like profile management, adding and appending existing receipts, defining budgets, ... are also present, ensuring you have all the tools in the toolbox for smooth and accurate usage of the application.

## How to get started

Before you can start using the application, there are a couple of necessities that have to be completed first.

### Prerequirements

- mysql workbench (v8.0.39 or higher).
- Node (v20.22.0 or higher)
- NPM (v10.9.3)
- VS code (latest)

### Pulling the repo

- Create a folder on your host machine
- Open a terminal in that folder.
- Execute the following command: 
```bash
git clone https://github.com/Jamey848/Webfundamentals
```

### Installing dependancies

Now that you have the necessary files, the dependancies for backend and frontend must be installed.

**Frontend**
- Go to the Frontend folder
- Open a terminal in the Frontend folder
- Execture the following command:
```bash
npm install
```

**Backend**
- Go to the Backend folder
- Open a terminal in the Backend folder
- Execture the following command:
```bash
npm install
```

### Setting up a MySql Database

The ShopChap application uses a mysql database to store and querry data. It is therefore required to have a copy of the database structure whitin your own mysql workbench on your host machine.

1. Open the "SC_Database.sql" file in the backend folder (open this in mysql).
2. Execute the .sql file (click the lightning bolt at the top of the screen).

You should be able to see a database has been created.

### Setting up your API key

> This step is only required if you wish to use the "recommendations" page of the application.

Firstly, you must obtain an api key to use the google gemini models.

To do so, please follow the instructions of the official gemini api website: `https://ai.google.dev/gemini-api/docs/api-key`

Once you have your API key:

- Go to the Backend folder, there you will find a file names `dist.env.txt`
- Make a copy of this file and name it `.env`
- Open the `.env` file, you will see a parameter "API_KEY=".
- After the "=", fill this in with your google gemini API key.

### Running the application

You're almost there! All that must be done is opening the folders in VS code and running them.

To start, open 2 windows in visual studio code.

**Backend**

- In the first window, go to "file" -> "folder" -> Select the backend folder and open it.
- Open a console panel by going to "view" -> "terminal".
- Run "npm start".

**Frontend**

- In the second window, go to "file" -> "folder" -> Select the frontend folder and open it.
- Open a console panel by going to "view" -> "terminal".
- Run "npm run dev".

Wait for both services to be up and running. Afterwards,
go to your browser and enter:
`http://localhost:5173/`

Now you can use the ShopChap application! Have fun!