import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductDescription = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [desc, setDesc] = useState([...props.desc]);
  const descItr=desc.map((descObj, index) =>{
        return (<tr key={descObj.attribute+index} className='info'>
            <td>{descObj.attribute}</td>
            <td>{descObj.value}</td>
        </tr>
        );
    }
  );
  return (
    <div className="table-responsive">
      <table className=".table-striped" title="Product Description Table">
        <thead>
          {/* <h3>{`Product Description`}</h3> */}
        <tr>
          <th></th>
          <th></th>
        </tr>
        </thead>
       {descItr}
      </table>
    </div>
  );
}
