import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme/Theme';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(ThemeProvider, { theme: themes.dark, children: _jsx(App, {}) }) }));
//# sourceMappingURL=main.js.map