/*import React from 'react'
import md5 from "md5";

function Checkout() {

    const total = "100.00";

    const params = new URLSearchParams({
        merchant_id: "10027482",
        merchant_key: "o8jzwyczmfl6f",
        return_url: "https://fa87-146-232-65-110.eu.ngrok.io",
        cancel_url: "https://fa87-146-232-65-110.eu.ngrok.io",
        notify_url: "https://fa87-146-232-65-110.eu.ngrok.io",
        name_first: "Keegan",
        email_address: "keeganreid8@gmail.com",
        m_payment_id: "1234",
        amount: total,
        item_name: "order 1",
        passphrase: "P0iNtikNif1892"
      });
      
      // Create an MD5 signature of it.
      const MD5Signature = md5(params.toString())

   
    return (
        <div>

            <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
          <input type="hidden" name="merchant_id" value="10027482" />
          <input type="hidden" name="merchant_key" value="o8jzwyczmfl6f" />
          <input type="hidden" name="return_url" value="https://fa87-146-232-65-110.eu.ngrok.io" />
          <input type="hidden" name="cancel_url" value="https://fa87-146-232-65-110.eu.ngrok.io" />
          <input type="hidden" name="notify_url" value="https://fa87-146-232-65-110.eu.ngrok.io" />
          <input type="hidden" name="name_first" value="Keegan" />
          <input type="hidden" name="email_address" value="keeganreid8@gmail.com" />
          <input type="hidden" name="m_payment_id" value="1234" />
          <input type="hidden" name="amount" value={total} />
          <input type="hidden" name="item_name" value="order 1" />
          <input type="hidden" name="passphrase" value="P0iNtikNif1892" />
          <input type="hidden" name="signature" value={MD5Signature} />
          <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="col-lg-6">
                <input style={{marginRight: 20, float: 'right'}} name="disable" type="submit" width="100%" height="100%" alt="Submit" align="bottom" value="Purchase" />
            </div>
          </div>
        </form>


        </div>
    )
}

export default Checkout;

/*
 Merchant ID:	10027482
Merchant Key:	o8jzwyczmfl6f
Sandbox URL:	https://sandbox.payfast.co.za/eng/process
P0iNtikNif1892
 */


