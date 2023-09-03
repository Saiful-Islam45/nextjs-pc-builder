import Rating from "@/ui/Rating";
import { useDispatch } from "react-redux";
import { addToBuilder, removeFromBuilder } from "@/redux/reducers/PcBuilder/pcBuilderSlice";
import Image from "next/image";

const ProductCard = ({ product, onSelectProduct, shouldRemove }) => {
  const dispatch= useDispatch()
  return (
    <div className="flex flex-col p-2 sm:flex-row md:flex-row justify-between my-2 hover:scale-y-105 duration-500 shadow-md">
      <Image src={product.image} height={150} width={150} loading="lazy" alt={product.name} />
      <div className="pl-2 mt-3">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <Rating rating={product.rating} />
        <ul className="pl-2">
          <li>{"Category: " + product.category}</li>
          <li>{"Status: " + product.status}</li>
        </ul>
      </div>
      <div>
        <p>$ {product.price}</p>
        <button
          onClick={() => {
            onSelectProduct(product);
            shouldRemove ? dispatch(removeFromBuilder(product)) : dispatch(addToBuilder(product));
          }}
          className={`${shouldRemove ? 'bg-red-600' : 'bg-purple-700'} ring-1 hover:ring-offset-1 px-3 py-1 rounded-full text-white mt-2 sm:mt-0`}
        >
          {shouldRemove ? 'Remove' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
