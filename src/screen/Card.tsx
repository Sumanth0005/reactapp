import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

const Card: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>

      <div className="card">
        <div className="card-header">
            <div className="bankName">HDFC</div>
            <div className="cardType">Credit Card</div>

        </div>
        <div className="card-body">
          {children}
        </div>

        </div>
    </>
  )
};

export default Card;