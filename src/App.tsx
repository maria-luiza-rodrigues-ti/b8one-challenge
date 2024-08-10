import { Heart } from "lucide-react";

import { products } from "./data.json";

function App() {
  const productsList = products;

  return (
    <main>
      <div className="App flex gap-32 items-center justify-center mx-40 my-40 w-4/5">
        {productsList &&
          productsList.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-lg p-8 space-y-8 w-min"
            >
              <div className="relative">
                <div className="absolute right-0 h-12 w-12 flex items-center justify-center bg-grayscale-200 rounded-full transition-all cursor-pointer group hover:bg-pink-b8one-100">
                  <Heart className="group-hover:text-red-b8one-500 group-hover:transition-all" />
                </div>
                <img
                  src={product.image}
                  className="max-w-60 h-60 object-contain"
                />
              </div>
              <h1 className="font-medium text-sm text-grayscale-900 h-[60px] line-clamp-3">
                {product.title}
              </h1>
              <div>
                <span className="block font-medium text-sm text-grayscale-600 line-through tracking-[-0.07px]">
                  R$ {product.totalPrice}
                </span>
                <span className="text-xl text-red-b8one-500 font-semibold tracking-[-.1px]">
                  R$ {product.discountedPrice}
                </span>
                <span className="block text-xs font-medium text-grayscale-700 tracking-[-0.06px]">
                  em até{" "}
                  <strong className="font-medium text-grayscale-900">
                    {product.installments}x de R$ {product.installmentsPrice}
                  </strong>{" "}
                  sem juros
                </span>
              </div>
              <button className="bg-green-b8one-400 block w-full px-6 py-3 rounded-[5px] text-white text-base font-bold tracking-[-0.08px] transition-all hover:bg-green-b8one-600">
                ADICIONAR
              </button>
            </article>
          ))}
      </div>
    </main>
  );
}

export default App;
