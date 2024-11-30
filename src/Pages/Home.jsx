import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/product/reducer";
const Home = () => {
  const  loading = useSelector((state) => state.loading);
  const  products = useSelector((state) => state.products);
  const  error = useSelector((state) => state.error);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());

  }, []);

 
if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-high-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-high-bounce delay-500"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-high-bounce delay-1000"></div>
        </div>
      </div>
    );
  
}

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="px-2">
          <div className="flex justify-between flex-wrap">
            {products.map((item, index) => {
              return <Cards value={item} key={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
