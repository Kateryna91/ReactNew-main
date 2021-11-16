import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import React from 'react';

import Header from '../../header';

export default props => (
    <>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </>
  );
