import { server } from "../store";
import axios from "axios";

export const getMyInvoices = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyInvoicesRequest" });

    const { data } = await axios.get(
      `${server}/myinvoices`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getMyInvoicesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getMyInvoicesFail",
      payload: error.response.data.message || "",
    });
  }
};
