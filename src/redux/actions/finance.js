import { server } from "../store";
import axios from "axios";

export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllStudentsRequest" });

    const { data } = await axios.get(
      `${server}/students`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllStudentsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllStudentsFail",
      payload: error.response.data.message,
    });
  }
};

export const createInvoice =
  (id, cid, description, days) => async (dispatch) => {
    try {
      dispatch({ type: "createInvoiceRequest" });

      const { data } = await axios.post(
        `${server}/sendinvoice/u/${id}/c/${cid}`,
        { description, days },

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "createInvoiceSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "createInvoiceFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllInvoices = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllInvoiceRequest" });

    const { data } = await axios.get(
      `${server}/invoices`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllInvoiceSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllInvoiceFail",
      payload: error.response.data.message,
    });
  }
};
