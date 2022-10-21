import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useAuth } from '../contexts/auth-context';
import { setDoc, collection, addDoc, doc } from 'firebase/firestore';
import { users } from '../lib/firestore-collections';
import md5 from "md5";


export const Cart = () => {


  const { items, setItems } = useContext(CartContext);

  const { currentUser } = useAuth();

  function deleteitem(id) {

    setItems(items.filter((item) => item.id !== id))

  }

  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

  console.log(items)

  const listcart = items.map((item) =>

    <li key={item.id}>

      <label style={{ 'width': '30em' }}> {item.name} :</label>

      <label style={{ 'width': '30em' }}>R{item.price}</label>

      <button className='deleteFromCart' onClick={() => deleteitem(item.id)}>X</button>

    </li>

  );


  function addSession(e) {

    e.preventDefault();

    let data = {};

    items.forEach(element => {

      setDoc(doc(collection(users, currentUser.uid, "sessions"), element.id), data)

    });

  }


  var uuid = require("uuid");

  var paymentid = uuid.v4();




  const paymentParams = new URLSearchParams({

    merchant_id: "10027482",

    merchant_key: "o8jzwyczmfl6f",

    return_url: "https://723f-146-232-65-122.eu.ngrok.io/login",

    cancel_url: "https://723f-146-232-65-122.eu.ngrok.io/login",

    notify_url: "https://723f-146-232-65-122.eu.ngrok.io/login",

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

      <h1 className='pageHeading' style={{ 'top': '-10', 'font-size': '3em', 'margin-left': '1mm', ' position': 'absolute' }}>Marketplace</h1>

      <br></br>




      <h1 style={{ 'margin-left': '20mm', ' position': 'absolute' }}>Cart</h1>

      <div>




        <form action="https://sandbox.payfast.co.za/eng/process" method="POST">

          <input type="hidden" name="merchant_id" value="10027482" />

          <input type="hidden" name="merchant_key" value="o8jzwyczmfl6f" />

          <input type="hidden" name="return_url" value="https://723f-146-232-65-122.eu.ngrok.io/login" />

          <input type="hidden" name="cancel_url" value="https://723f-146-232-65-122.eu.ngrok.io/login" />

          <input type="hidden" name="notify_url" value="https://723f-146-232-65-122.eu.ngrok.io/login" />

          <input type="hidden" name="name_first" value={currentUser.displayName} />

          <input type="hidden" name="email_address" value={currentUser.email} />

          <input type="hidden" name="m_payment_id" value={paymentid} />

          <input type="hidden" name="amount" value={totalPrice} />

          <input type="hidden" name="item_name" value={`order ${paymentid}`} />

          <input type="hidden" name="passphrase" value="P0iNtikNif1892" />

          <input type="hidden" name="signature" value={MD5Signature} />

          <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div className="col-lg-6">

              {/* <input className='purchase' name="disable" type="submit" alt="Submit" align="bottom" value="Purchase" style={{'marginLeft': '5em'}}/> */}

              <input className='purchase' name="disable" type="submit" alt="Submit" align="bottom" value="Purchase" style={{ 'marginLeft': '5em' }} onClick={addSession} />

            </div>

          </div>

        </form>





      </div>




      <div className='itemsInCart' style={{ 'margin-left': '-5mm', ' position': 'absolute' }}>

        <h3 >Items in cart : {items.length}</h3>

      </div>



      <div className='totalPayable' style={{' position': 'absolute', 'marginLeft': '45%', 'marginRight': '40%', 'marginTop': '17em'}}>

        <h3>Total price : R{totalPrice}</h3>

      </div>

      <h3 className='listInCart' style={{ 'margin-left': '30mm', ' position': 'absolute' }}>

        {listcart}

      </h3>

    </div>

  );

}; 