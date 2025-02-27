import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  //   const data = fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   console.log("data:::", data);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setLoading(false);
      //   console.log("res", res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>List of Products:</p>
      {loading ? (
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/844/477/original/pixel-illustration-loading-icon-progress-bar-free-vector.jpg"
          height={100}
          width={100}
          alt=""
        />
      ) : (
        products.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </div>
  );
}

export default Products;
