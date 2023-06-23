import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (requestParams.url && requestParams.method) {
          setLoading(true);
          let response;

          switch (requestParams.method) {
            case 'GET':
              response = await axios.get(requestParams.url);
              break;
            case 'POST':
              response = await axios.post(requestParams.url, requestParams.json);
              break;
            case 'PUT':
              response = await axios.put(requestParams.url, requestParams.json);
              break;
            case 'DELETE':
              response = await axios.delete(requestParams.url);
              break;
            default:
              throw new Error('Invalid request method.');
          }

          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.error('API Error:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [requestParams]);

  const callApi = (requestParams) => {
    setLoading(true);
    setRequestParams(requestParams);
  };

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

