import { products } from "./data.json";

function App() {
  const productsList = products;

  return (
    <main>
      <div className="App flex">
        {productsList &&
          productsList.map((product) => (
            <div key={product.id}>
              <img src={product.image} />
              <h1>{product.title}</h1>
              <span>{product.totalPrice}</span>
              <span>{product.discountedPrice}</span>
              <span>
                em até{" "}
                <strong>
                  {product.installments}x de R$ {product.installmentsPrice}
                </strong>{" "}
                sem juros
              </span>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
