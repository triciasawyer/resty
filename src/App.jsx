import { useState, useEffect, useReducer } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import axios from 'axios';


export const initialState = {
  data: null,
  history: [],
  loading: false,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-DATA':
      return { ...state, data: action.payload };
    case 'HISTORY':
      return { ...state, history: action.payload };
    case 'LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

function App() {
  // const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [loading, setLoading] = useState(false);


  useEffect(() => {
    try {
      const getData = async () => {
        if (requestParams.method === 'GET') {
          let response = await axios.get(requestParams.url);
          dispatch({ type: 'SET-DATA', payload: response.data });
          let results = [requestParams, response.data];

          dispatch({ type: 'HISTORY', payload: results });
        }
      }
      if (requestParams.url && requestParams.method) {
        getData();
      }
      dispatch({ type: 'LOADING', payload: false });
    } catch (err) {
      dispatch({ type: 'SET-DATA', payload: 'There is no data available' });
      dispatch({ type: 'LOADING', payload: false });
    }
  }, [requestParams]);


  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  }


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
      <History history={state.history} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}


export default App;

