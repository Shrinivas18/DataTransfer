import React, { useState } from "react";
import ProductListCard from "./ProductListCard";

function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    if (!show) {
      setLoading(true);
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let result = await response.json();
        setData(result);
        setShow(true);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>{show ? "Hide Data" : "Show Data"}</button>

      {loading && (
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/844/477/original/pixel-illustration-loading-icon-progress-bar-free-vector.jpg"
          height={100}
          width={100}
          alt="Loading..."
        />
      )}

      {show && !loading && (
        <div>
          <ProductListCard data={data} />
        </div>
      )}
    </div>
  );
}

export default ProductList;
