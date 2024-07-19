/** @format */

import React, { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(prevData => {
          // Log the current state of products before updating
          console.log("Previous Data:", prevData);

          // Return the new state
          return [...prevData, ...result.products];
        });
        setLoading(false);
      }
      console.log("object", result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 50) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>loading data please wait</div>;
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products && products.length
          ? products.map(item => {
              return (
                <div style={{ width: "30%", padding: "0 5px" }} key={item.id}>
                  <img src={item.thumbnail} alt="" />
                  <h4>{item.title}</h4>
                </div>
              );
            })
          : null}
      </div>
      <hr />
      <button disabled={disableButton} onClick={() => setCount(count + 1)}>
        load more
      </button>
      {disableButton ? <p>you have reached to 50 products</p> : null}
    </div>
  );
}
