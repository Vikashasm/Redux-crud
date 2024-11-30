import { fetchRequest, successFetch, failFetch } from "./productTypes";
import { getRequest } from "../../requests/AxiosRequests";
import { requestProduct,successProduct,failProduct } from "./productActions";
const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchRequest:
      return { ...state, loading: true };
    case successFetch:
      return { ...state, loading: false, products: action.payload };
    case failFetch:
      return { ...state, loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export const fetchProduct = () => async (dispatch) => {
    dispatch(requestProduct());
 
  try {
    const jsondata = await getRequest("user/");
    const data = jsondata.data.data

    dispatch(successProduct(data));
  } catch (error) {
    dispatch(failProduct(error.message));
  }
};
