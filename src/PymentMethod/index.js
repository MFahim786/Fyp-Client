import React, { useState, useEffect } from 'react';

import createPaymentRequest from '../services/create-paymennt-req';
import '../PymentMethod/VisaCardForm.css.css'; // Ensure you create corresponding CSS file or use inline styles

const VisaCardForm = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const handlePayment = async () => {
     
      const description = 'Quick Ride Payment';
      try {
        const data = await createPaymentRequest();
        if (data?.shortLink) {
          setUrl(data.shortLink);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }; 
    handlePayment();
  }, []);

  const handleButtonPress = () => {
    // navigate(`/driver-coming/${rideId}/${price}`);
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader">Loading...</div>
      )}
      {!loading && url && (
        <div className="contentContainer">
          <iframe
            src={url}
            title="Payment"
            className="webview"
          />
          <button className="button" onClick={handleButtonPress}>
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default VisaCardForm;
