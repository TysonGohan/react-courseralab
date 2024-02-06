import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name : { user.results[0].name.first }</h2>
      <img src={user.results[0].picture.large} alt="random person"/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

const UseEffectWithFetch = () =>
{

    const [btcData, setBtcData] = useState({}); 
    const [userData, setUserData] = useState([]);
    
    const fetchData = () => { 
        console.log("This is called");
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
          .then((response) => response.json()) 
          .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
          .catch((error) => console.log(error)); 
    };

      const fetchData2 = () => 
      {
        console.log("fetch 2 is called");
        fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch((error) => console.log(error));
      }

      //useEffect(fetchData, []); 
      
      //This will cause an infinite loop to render the data again and again.
      //useEffect(fetchData); 
     
      useEffect(() => { 
        fetchData(); 
      }, []);

      useEffect(() => { 
        fetchData2(); 
      }, []);  

    return (
        <>
          <div style={{padding: '40px'}}>
              <h1> This is use effect example with fetch API </h1><br/>
              <h2>Current BTC/USD data</h2> 
              <p>Code: {btcData.code}</p> 
              <p>Symbol: {btcData.symbol}</p> 
              <p>Rate: {btcData.rate}</p> 
              <p>Description: {btcData.description}</p> 
              <p>Rate Float: {btcData.rate_float}</p> 
          </div>
          <div style={{padding: '40px'}}>
            {
              Object.keys(userData).length > 0 ? 
                <div>
                  <h2> Data returned </h2>
                  <h3> First Name : { userData.results[0].name.first }</h3>
                  <h3> Second Name : { userData.results[0].name.last }</h3>
                </div> : 
                <h2> Data pending...... </h2>
            }
          </div>
          <App/>
        </>
    )
}

export { UseEffectWithFetch };