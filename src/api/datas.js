import axios from "axios";
import { api_key, base_url } from "./key";

export default function Signup() {
  console.log("hello sign upd");
}

export async function FetchLogin(credentials) {
  try {
    const { email, password } = credentials;
    const payload = { email, password };

    const response = await axios.post(`${base_url}/login`, payload, {
      headers: {
        "Api-Key": api_key,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
}

export async function FetchSignup(credentials) {
  console.log(credentials);
  const { name, email, phone, password, password_confirmation } = credentials;
  const payload = { name, email, phone, password, password_confirmation };

  try {
    const response = await axios.post(`${base_url}/register`, payload, {
      headers: {
        "Api-Key": api_key,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error.response;
  }
}

export async function FetchVerify(credentials) {
  // console.log(credentials);
  try {
    const { email, code } = credentials;
    const payload = { email, code };

    const response = await axios.post(`${base_url}/verify`, payload, {
      headers: {
        "Api-Key": api_key,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

export async function FetchCodeResend(credentials) {
  try {
    const response = await axios.post(
      `${base_url}/resend/code`,
      { email: credentials },
      {
        headers: {
          "Api-Key": api_key,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
}
