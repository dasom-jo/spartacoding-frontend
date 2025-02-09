import React from 'react';
import ReactDOM from 'react-dom/client';
//import Unit from './Unit.tsx';
//import Intergration from './Intergration.tsx';
import Snapshot from './Snapshot.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Unit />
    <Intergration/> */}
    <Snapshot/>
  </React.StrictMode>
);
