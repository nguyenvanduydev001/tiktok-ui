import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App'; // Kiểm tra đường dẫn đến App.js
import reportWebVitals from './reportWebVitals';
import './components/GlobalStyles/GlobalStyles.scss'; // Import tệp SCSS ở đây

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// Nếu bạn muốn đo lường hiệu suất trong ứng dụng của bạn, bạn có thể sử dụng reportWebVitals như sau:
reportWebVitals();
