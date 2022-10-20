import React from 'react';
import {useParams} from 'react-router-dom';

function PaymentSuccesful(){
    let params = useParams();

    return(
        <div>
            <h1>{params.success === "successful" ? "Payment was successful!" : "Payment cancelled"}</h1>
        </div>
    )
}

export default PaymentSuccesful;
