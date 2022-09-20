import { FetchingStart, FetchingSucceed, FetchingError } from "./AdminSlice";
import { AddinStart, AddingSucceed, AddingError } from "./ProductSlice";

const URL = process.env.REACT_APP_API_URL;

export const login = async (dispatch, user) => {
  dispatch(FetchingStart());
  try {
    const res = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const AdminData = await res.json();
    dispatch(FetchingSucceed(AdminData));
  } catch (er) {
    dispatch(FetchingError());
  }
};

export const AddProduct = async (dispatch, product, Admin) => {
  dispatch(AddinStart());
  try {
    const res = await fetch(`${URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const productSaved = await res.json();

    dispatch(AddingSucceed(productSaved));
  } catch (er) {
    dispatch(AddingError());
  }
};

export const upDateProduct = async (newProduct, id) => {
  try {
    const res = await fetch(`${URL}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const updated = res.json();
  } catch (er) {}
};

export const DeleteProduct = async (id) => {
  try {
    const res = await fetch(`${URL}/product/${id}`, {
      method: "DELETE",
    });
    const databack = await res.json();
  } catch (er) {}
};
