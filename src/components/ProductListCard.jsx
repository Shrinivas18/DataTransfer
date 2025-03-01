import React from "react";
import "./ProductListCard.css";

function ProductListCard({ data }) {
  const products = Array.isArray(data) ? data : [data];
  return (
    <div className="container">
      {products.map((item) => {
        return (
          <div className="cardOuter" key={item.id}>
            <img
              className="image"
              src={item.image}
              alt="Oops!"
              title={item.title}
            />
            <span className="rate">
              {item.rating.rate}{" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKh8m9H8pLyKAgQXfpIFh2H1WkpB3HZB6cQrwZD6x1-PChQWeJHqw5TXM&s" />
              {"  "}| {item.rating.count}
            </span>
            <p className="desc">
              {item.description.length > 50
                ? item.description.slice(0, 50)
                : item.description}
            </p>
            <p className="price">Price: {item.price} $</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListCard;
