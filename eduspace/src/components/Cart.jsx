import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useAuth } from '../contexts/auth-context';
import md5 from "md5";



export const Cart = () => {


  const { items, setItems } = useContext(CartContext);
  function deleteitem(id) {
    setItems(items.filter((item) => item.id !== id))
    console.log("hayo")
  }
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);
  console.log(items)
  const listcart = items.map((item) =>
    <li key={item.id}>
      {item.name}
      R{item.price}
      <button onClick={() => deleteitem(item.id)}>Delete from cart</button>
    </li>
  );

  const { currentUser } = useAuth();

  var uuid = require("uuid");
  var paymentid = uuid.v4();

  const paymentParams = new URLSearchParams({
    merchant_id: "10027482",
    merchant_key: "o8jzwyczmfl6f",
    return_url: "https://5820-146-232-65-110.eu.ngrok.io/marketplace",
    cancel_url: "https://5820-146-232-65-110.eu.ngrok.io/marketplace",
    notify_url: "https://5820-146-232-65-110.eu.ngrok.io/marketplace",
    name_first: currentUser.displayName,
    email_address: currentUser.email,
    m_payment_id: paymentid,
    amount: totalPrice,
    item_name: `order ${paymentid}`,
    passphrase: "P0iNtikNif1892"
  });

  const MD5Signature = md5(paymentParams.toString())

  return (

    //   <CartContext.Provider value={[item, setItem]}> 
    //   {props.children} 
    // </CartContext.Provider> 

    <div>
      <span className='itemsInCart'>items in cart : {items.length}</span>
      <br />
      <span className='totalPayable'>total price : {totalPrice}</span>

      <div>

<form action="https://sandbox.payfast.co.za/eng/process" method="POST">
<input type="hidden" name="merchant_id" value="10027482" />
<input type="hidden" name="merchant_key" value="o8jzwyczmfl6f" />
<input type="hidden" name="return_url" value="https://5820-146-232-65-110.eu.ngrok.io/marketplace" />
<input type="hidden" name="cancel_url" value="https://5820-146-232-65-110.eu.ngrok.io/marketplace" />
<input type="hidden" name="notify_url" value="https://5820-146-232-65-110.eu.ngrok.io/marketplace" />
<input type="hidden" name="name_first" value={currentUser.displayName} />
<input type="hidden" name="email_address" value={currentUser.email} />
<input type="hidden" name="m_payment_id" value={paymentid} />
<input type="hidden" name="amount" value={totalPrice} />
<input type="hidden" name="item_name" value={`order ${paymentid}`} />
<input type="hidden" name="passphrase" value="P0iNtikNif1892" />
<input type="hidden" name="signature" value={MD5Signature} />
<div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<div className="col-lg-6">
    <input style={{marginRight: 20, float: 'right'}} name="disable" type="submit" width="100%" height="100%" alt="Submit" align="bottom" value="Purchase" />
</div>
</div>
</form>


</div>

      <br />
      {listcart}

    </div>
  );
};