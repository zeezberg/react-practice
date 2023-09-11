import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [catalog, setCatalog] = useState([]);
  console.log("catalog: ", catalog);

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = await response.data.products; // const { products } = await respnonse.data;
    console.log("products: ", products);
    setCatalog(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {catalog?.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default ProductList;
