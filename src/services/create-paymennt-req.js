import axios from "axios";
const createPaymentRequest = async () => {
    console.log('createPaymentRequest');
   
    try {
        // Data to be sent to UNIPaaS server
        const requestData = {
            "amount": 40,
            "country": "GB",
            "vendorId": "65fc0592d1c4c6a9a46763d1",
            "email": "mfahimchq@gmail.com",
            "currency": "GBP",
            description:"Buy theme from Ar-Carnival",
        };
    
        // Make a POST request to UNIPaaS server
        const response = await axios.post('https://sandbox.unipaas.com/platform/pay-ins/checkout', requestData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BoRhn2IG9BcMhxIVhWkKmA==' 
          }
        });
    
        // Send the response from UNIPaaS server to your app
        // console.log(response.data); // Access the parsed JSON data from the response
        return response.data; // Return the parsed JSON data
      } catch (error) {
        console.error('Error sending data to UNIPaaS:', error.message);
        throw error; // Throw the error to handle it elsewhere
      }
};

export default createPaymentRequest;
