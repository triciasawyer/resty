import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  // const [postData, setPostData] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      // data: ,
    };
    props.handleApiCall(formData);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span className='url-input-bar'>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl (e.target.value)}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="form-get" id="get" onClick={(e) => setMethod('GET')}>GET</span>
          <span data-testid="form-post" id="post" onClick={(e) => setMethod('POST')}>POST</span>
          <span data-testid="form-put" id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
          <span data-testid="form-delete" id="delete" onClick={(e) => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
