//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css';


const appRoot = document.getElementById('app')







ReactDOM.render(<p>This is my boilerplate</p>,appRoot)