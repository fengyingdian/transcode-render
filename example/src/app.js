import React from 'react';
import { render } from 'react-dom';
import ReactCat from 'react-break-cat/lib';
import 'react-break-cat/lib/main.min.css';

const App = () => <ReactCat />;
render(<App />, document.getElementById('root'));
