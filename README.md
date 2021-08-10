### Date created

2021-07-27

### Project Title

Natural language processing (NLP) Tool

### Description

Allow users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Project Setup

1. clone the Project - `git clone https://github.com/alexaac/news-nlp.git`
2. `cd news-nlp`
3. install the dependencies - `npm install`
4. start the project on localhost:8082 - `npm run build-dev` in one terminal, `npm start` in another
5. test the requests using Jest - `npm test`
6. run the production version - `npm run build-prod` in one terminal, `npm start` in another
7. shortcut for development mode: modify the start script in package.sjon to "start": "concurrently \"node src/server/index.js\" \"npm run build-dev\""

#### References

[Evaluate A News Article with Natural Language Processing](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp)

#### Files

```bash
.
├── package.json # npm package manager file
├── package-lock.json
├── README.md
├── src
│   ├── client
│   │   ├── index.js
│   │   ├── js
│   │   │   ├── envData.js
│   │   │   ├── formHandler.js
│   │   │   └── urlChecker.js
│   │   ├── styles # Styles for the app
│   │   │   ├── base.scss
│   │   │   ├── footer.scss
│   │   │   ├── form.scss
│   │   │   ├── header.scss
│   │   │   └── resets.scss
│   │   └── views
│   │       └── index.html # DOM rendering
│   └── server
│       ├── index.js
│       └── mockAPI.js
├── __test__
│   ├── mockData.js
│   ├── testFormHandler.spec.js
│   └── testUrlChecker.spec.js
├── webpack.common.js # webpack config files
├── webpack.dev.js
└── webpack.prod.js
```

### TODO

Deployed with Heroku - https://nlp-sentiment-ud.herokuapp.com/

### Credits

Alexa Cristina | Udacity
