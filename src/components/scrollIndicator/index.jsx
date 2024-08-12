/** @format */

import React, { useEffect, useState } from "react";
import styles from './scroll.module.css'

export default function ScrollIndicator({ url }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log("data", data);
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

function handleScrollPercentage(){
    // console.log(
    //     document.body.scrollTop,
    //     document.documentElement.scrollTop,
    //     document.documentElement.scrollHeight,
    //     document.documentElement.clientHeight
    // );

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height)*100)
}

useEffect(()=>{
     window.addEventListener('scroll',handleScrollPercentage)
     return ()=>{
        window.removeEventListener('scroll', ()=>{})
     }     
},[])

console.log('scrollPercentage', scrollPercentage);
  return (
    <div>
      <div className={styles.indicator}>
        <div className={styles.posRelative}>
        <div className={styles.count}>{scrollPercentage} %</div>
        <div className={styles.innerBox} style={{width: `${scrollPercentage}%`}}>          
        </div>
        </div>
      </div>
      <h4>ScrollIndicator</h4>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {products && products.length > 0
        ? products.map((product, index) => <p key={index}>{product.title}</p>)
        : null}
    </div>
  );
}
