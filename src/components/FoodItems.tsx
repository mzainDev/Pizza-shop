import toast, { Toaster } from "react-hot-toast";
import FoodData from "../data/FoodData";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";

interface RootState {
  category: {
    category: string;
  };
  search: {
    search: string;
  };
}

const FoodItems = () => {
  const category = useSelector((state:RootState) => state.category.category);
  const search = useSelector((state:RootState) => state.search.search);
  const handleToast = (name: string) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 py-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
