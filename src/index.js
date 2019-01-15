import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import TokenWrapper from "./TokenWrapper";

ReactDOM.render(<BrowserRouter>
                    <TokenWrapper />
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
