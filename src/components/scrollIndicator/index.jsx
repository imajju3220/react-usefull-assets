import React, { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
    //   console.log("data", data);
      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      } else {
        setErrorMessage("No products found");
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    } 
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);


  return (
    <div>
      <h4>ScrollIndicator</h4>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {products.map((product, index) => (
        <p key={index}>{product.title}</p>
      ))}
    </div>
  );
}
