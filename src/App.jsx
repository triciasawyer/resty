import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


const App = () => {
const [data, setData] = useState(null);
const [requestParams, setRequestParams] = useState({});


  callApi = (requestParams) => {
    // mock output
    const newData = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(newData);
    setRequestParams(requestParams);
  };

    return (
      <React.Fragment>
        <Header />
        <div className='request-flex'>
        <Form handleApiCall={callApi} />
        <section className='search-input'>
        <div className='request-method'>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        </section>
        </div>
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  };

export default App;
