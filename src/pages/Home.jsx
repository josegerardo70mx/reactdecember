import React from "react";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  console.log("log productos", products);

  return (
        


    <div className="container--card">
      {products.map((product, id) => (
        <div className="card-" key={id}>
          <Link to={`/products/${product.id}`}>
            <div className="container-image">
              <img src={product.productImgs[0]} alt="" />
            </div>

            <div className="description">
              <strong>{product.title}</strong>

              <p>
                <b>Price</b>
              </p>
              <span>{product.price}</span> <br></br>
              <Button variant="success">view product detail</Button>{' '}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
