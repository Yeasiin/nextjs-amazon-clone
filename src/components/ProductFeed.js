import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <p>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </p>
    </div>
  );
}

export default ProductFeed;
