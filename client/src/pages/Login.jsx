import React from "react";
import {
  Link,
  Form,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 5) {
    errors.msg = "password to short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
   // toast.error(erroe?.response?.data?.msg);
   errors.msg = erroe?.response?.data?.msg;
    return errors;
  }
};

const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {errors?.msg && <p style={{ color: "red" }}>{erroe.msg}</p>}
        <p></p>
        <FormRow type="email" name="email" defaultValue="mridul@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSbumitting}>
          {isSbumitting ? "submitting..." : "submit"}
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
