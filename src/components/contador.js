import React, { useEffect, useState } from "react";


export function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(parseInt(initial));


  useEffect(() => {
    setCount(parseInt(initial));
    return;
  }, [initial]);

  const AddHandle = () => {
    setCount(count + 1);
  };

  const RemoveHandle = () => {
    setCount(count - 1);
  };


return (
  <div class=" container container-fluid align-items-streach text-center">
  <div className="w-25 flex-column align-items-center">
  <div className="d-flex flex-row justify-content-around align-items-center rounded">

  <button
  disable={ItemCount <= 0}
  class= "btn btn-outline-light"
  type= "button"
  onClick={RemoveHandle}>
  <p>-</p>
  </button>
  <div>
  <p>
  {ItemCount}
  </p>
  </div>
  <div>
  <button
  disable={ItemCount = 10}
  class= "btn btn-outline-light"
  type= "button"
  onClick={AddHandle}>
  <p>+</p>
  </button>

  </div>
<div>
  <button
    class="btn btn-outline-light"
    type="button"
    onClick={onAdd}>
    <p>Agregar</p>
  </button>
    </div>
      </div>
      </div>
      </div>

);
}
export default ItemCount;
