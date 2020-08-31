import React from 'react';
import { Spinner } from 'react-bootstrap';


const CustomSpinner = () => {
  return (
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <Spinner 
        animation={'border'} 
        role={'status'} 
        className={'ml-auto'}
      />
    </div>
  );
}

export default CustomSpinner;