import React, {useState} from "react";

function Item({ name, category }) {

  //    1) need to use useState variable "inCart" and use a setter
  //       function for that variable "setInCart" AKA(array destructuring)
  const [inCart, setInCart] = useState(false)

  //    2) update the state using the setter function(updates the variable)
  function handleAddCart(){
    setInCart(!inCart)
  }
  
  return (
  //    3) set <li className=""> to equal {inCart?"in-cart":""} within the li
  //    4) (<button add "onClick">)(call the inCart function)</button>
    <li className={inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{inCart?"Remove From Cart":'Add to Cart'}</button>
    </li>
  );
}

export default Item;