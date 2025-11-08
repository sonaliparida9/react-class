import { useEffect, useState } from "react";

export function ProductObject() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct({ Name: "Samsung TV", Price: 45000 });
  }, []); // Empty dependency array to run only once on mount   

  return (
    <div className="container-fluid">
      <h3>Product Details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
      </dl>

      <h2>Keys</h2>
      <ul>
        {Object.keys(product).map((key) => (
          <li key={key}>
            {key}: {product[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
