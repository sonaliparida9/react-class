import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { FakestoreIndex} from './fakestore/fakestore-index.jsx'
import { VideoTutorialIndex } from './video-tutorials/video-tutorial-index.jsx';
import { Login } from './hooks/login.jsx';
import { DataBinding } from './hooks/data-binding.jsx';
import { Arrays } from './hooks/array.jsx';
import { ProductObject } from './hooks/object.jsx';
import { ArrayOfObject } from './hooks/arrayofobject.jsx';
import { ArrayofObject1 } from './hooks/NestedIterations.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Default path for cookies */}
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <BrowserRouter>
        <ArrayofObject1 />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
