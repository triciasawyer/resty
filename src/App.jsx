import { useState, useEffect } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    // setLoading(true);
    // mock output
    //   const data = {
    //     count: 2,
    //     results: [
    //       { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //       { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //     ],
    //   };
    //   setData(data);
    //   setRequestParams(requestParams);
    //   setLoading(false);
    // }
    // try {
    //   let response = null;
    //   if (requestParams.method === 'GET') {
    //     response = await axios.get(requestParams.url);
    //     setData(response.data);
    //   } else if (requestParams.method === 'DELETE') {
    //     response = await axios.delete(requestParams.url);
    //     setData(response.data);
    //   } else if (requestParams.method === 'PUT') {
    //     response = await axios.put(requestParams.url, requestParams.body);
    //     setData(response.data);
    //   } else if (requestParams.method === 'POST') {
    //     response = await axios.post(requestParams.url, requestParams.body);
    //     setData(response.data);
    //   } else {
    //     throw new Error('Invalid request method.');
    //   }
    // } catch (error) {
    //   console.error('API Error:', error);
    // }
    // setLoading(false);
    setLoading(true); // gives a loading message
    setTimeout(() => {
    setRequestParams(requestParams);
    setLoading(false);
    }, 500);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        if (requestParams.url && requestParams.method) {
          setLoading(true);
          console.log(requestParams);
          let response = await axios(requestParams);
          let results = response.data
          setData(results);
          setLoading(false);
        }
      }
      getData();
    } catch (err) {
      setData('No data available');
    }
  }, [requestParams]);




  return (
    <>
      <Header />
      <div className='request-flex'>
        <Form handleApiCall={callApi} />
        <section className='search-input'>
          <div data-testid="app-div-method" className='request-method'>Request Method: {requestParams?.method?.toUpperCase()}</div>
          <div data-testid="app-div-url">URL: {requestParams.url}</div>
        </section>
      </div>
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
