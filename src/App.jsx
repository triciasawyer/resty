import { useState, useEffect, useReducer } from 'react';
import './App.scss';
import Header from './Components/Header';
import History from './Components/History';

import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';


export const initialState = {
  data: null,
  history: [],
  loading: false,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...state, loading: action.payload};
      case 'SET-DATA':
        return {...state, data: action.payload.results, history: [...state.history, {...action.payload.requestParams, data: action.payload.results}]};  
    case 'HISTORY':
      return {...state, data: state.history[action.payload]};
    default:
      return state;
  }
};


function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);


  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  }


  useEffect(() => {
    try {
      const getData = async () => {
        if (requestParams.url && requestParams.method) {
          dispatch({ type: 'LOADING', payload: true });

          let response = await axios(requestParams);
          let results = response.data
          dispatch({ type: 'SET-DATA', payload: { results, requestParams} });
          dispatch({ type: 'LOADING', payload: false });
        }
      }
      getData();
    } catch (err) {
      dispatch({ type: 'SET-DATA', payload: 'There is no data available' });
    }
  }, [requestParams]);


  const displayHistory = (idx) => {
    const action = {
      type: 'HISTORY',
      payload: idx
    }
    dispatch(action);
  }

  return (
    <>
      <Header />
      <div className='request-flex'>
        <Form handleApiCall={callApi} />
        <section className='search-results'>
          <div data-testid="app-div-method" className='request-method'>Request Method: {requestParams?.method?.toUpperCase()}</div>
          <div data-testid="app-div-url">URL: {requestParams.url}</div>
          <History className='history' history={state.history} displayHistory={displayHistory}/>
        </section>
      </div>
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}


export default App;

