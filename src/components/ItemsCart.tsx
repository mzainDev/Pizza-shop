import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart,incrementQty,decrementQty, } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

const ItemsCart: React.FC<Product> = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md p-2 rounded-lg mb-3">
        <MdDelete
          onClick={() => {
            dispatch(removeFromCart({ id }));
            toast(`${name} Removed!`, {
              icon: "👋",
            });
          }}
          className="absolute right-7 text-gray-600 cursor-pointer"
        />
        <img src={img} alt="" className="w-[50px] h-[30px]" />
        <div className="leading-5">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-500 font-bold">RS:{price}</span>
            <div className="flex justify-center items-center gap-2 absolute right-7">
              <AiOutlinePlus onClick={()=>qty >=1 ? dispatch(incrementQty({id})):(qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear" />
              <span>{qty}</span>
              <AiOutlineMinus onClick={()=>qty > 1 ? dispatch(decrementQty({id})):(qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsCart;
