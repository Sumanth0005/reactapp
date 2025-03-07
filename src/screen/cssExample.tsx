// import { useState } from 'react'
// import "../css/Example.css";
import '../example.css'
import Card from "./Card";

export default function CssExamples({
  cardNumber,
  name,
  expiry,
  className,
}: {
  cardNumber: string;
  name: string;
  expiry: string;
  className: string;
}) {
  const CardNumber = cardNumber.slice(0, 16); 
  const Name = name.slice(0, 15);
  const Expiry = expiry.slice(0, 4);

  return (
    <>
      <div className={className}>
        <Card>
          <div className="card-details">
            <div className="cardSecurity">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="cardnumber"> {CardNumber}</div>
            <div className="user">
              <div className="name">{Name}</div>
              <div className="expiry">
                {" "}
                <label className="valid">Valid Upto</label>
                {Expiry}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}