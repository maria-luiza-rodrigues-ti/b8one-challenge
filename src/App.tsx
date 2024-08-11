import { useEffect, useState } from "react";

import { Check, Heart } from "lucide-react";
import { Toaster, toast } from "sonner";

import { products } from "./data.json";

interface ProductProps {
  id: number;
  title: string;
  image: string;
  totalPrice: string;
  discountedPrice: string;
  installments: string;
  installmentsPrice: string;
  wishlist: boolean;
  cart: boolean;
}

function App() {
  const productsList = products;
  const [wishlistItems, setWishlistItems] = useState<ProductProps[]>([]);
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);
  const [productAddToCart, setProductAddToCart] = useState<{
    [key: number]: boolean;
  }>({});

  function toggleWishlist(product: ProductProps) {
    setWishlistItems((prevState) => {
      const isInWishlist = !!prevState.find((item) => item.id === product.id);

      if (isInWishlist) {
        toast.error("Produto removido dos favoritos!");
        return prevState.filter((item) => item.id !== product.id);
      } else {
        toast.success("Produto adicionado aos favoritos!");
        return [...prevState, product];
      }
    });
  }

  function addProductToCart(product: ProductProps) {
    setCartItems((prevState) => {
      const isProductInCart = prevState.some((item) => item.id === product.id);

      if (isProductInCart) {
        toast.error("Produto removido do carrinho!");
        return prevState;
      }
      toast.success("Produto adicionado ao carrinho!");
      return [...prevState, product];
    });

    setProductAddToCart((prevState) => ({
      ...prevState,
      [product.id]: !prevState[product.id],
    }));
  }

  useEffect(() => {
    const cartStateJSON = JSON.stringify(cartItems);
    const wishlistStateJSON = JSON.stringify(wishlistItems);

    localStorage.setItem("@b8one-challenge:cart-state-1.0.0", cartStateJSON);
    localStorage.setItem(
      "@b8one-challenge:wishlist-state-1.0.0",
      wishlistStateJSON
    );
  }, [cartItems, wishlistItems]);

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
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`${
                    wishlistItems.find((item) => item.id === product.id)
                      ? `bg-red-b8one-500 hover:bg-red-b8one-600`
                      : `bg-grayscale-200 hover:bg-pink-b8one-100`
                  }
                  absolute right-0 h-12 w-12 flex items-center justify-center  rounded-full transition-all cursor-pointer group  `}
                >
                  <Heart
                    className={`group-hover:text-red-b8one-500 group-hover:transition-all ${
                      wishlistItems.find((item) => item.id === product.id)
                        ? "fill-white text-white group-hover:text-white group-hover:fill-white"
                        : ""
                    }`}
                  />
                </button>
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
              <button
                onClick={() => addProductToCart(product)}
                className={`${
                  productAddToCart[product.id]
                    ? `bg-green-b8one-100 hover:bg-green-100`
                    : `bg-green-b8one-400 hover:bg-green-b8one-600 text-grayscale-900`
                }
                w-full px-6 py-3 rounded-[5px] text-white text-base font-bold tracking-[-0.08px] transition-all flex justify-center gap-3`}
              >
                {productAddToCart[product.id] ? (
                  <>
                    <Check /> ADICIONADO
                  </>
                ) : (
                  "ADICIONAR"
                )}
              </button>
            </article>
          ))}
      </div>
      <Toaster richColors />
    </main>
  );
}

export default App;
