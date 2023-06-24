import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [data, setData] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      data: data ? JSON.parse(data) : null,
    };
    props.handleApiCall(formData);
  };

  const handleClick = (e) => {
    const selectedMethod = e.target.id;
    setMethod(selectedMethod);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span className='url-input-bar'>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl (e.target.value)}/>
          <button data-testid="form-button" type="submit">GO!</button>
        </label>
        

        <label className="methods">
          <span data-testid="form-span-get" id="GET" onClick={handleClick} style={{ backgroundColor: method === 'GET' ? 'lightgreen' : '#d6edfa'}}>GET</span>
          <span data-testid="form-span-post" id="POST" onClick={handleClick} style={{ backgroundColor: method === 'POST' ? 'lightgreen' : '#d6edfa'}}>POST</span>
          <span data-testid="form-span-put" id="PUT" onClick={handleClick} style={{ backgroundColor: method === 'PUT' ? 'lightgreen' : '#d6edfa'}}>PUT</span>
          <span data-testid="form-span-delete" id="DELETE" onClick={handleClick} style={{ backgroundColor: method === 'DELETE' ? 'lightgreen' : '#d6edfa'}}>DELETE</span>
        </label>
        {(method === 'POST' || method === 'PUT') && <textarea onChange={(e) => setData(e.target.value)}/>}
      </form>
    </>
  );
}

export default Form;
