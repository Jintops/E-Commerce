import React, { useState } from "react";
import CommonForm from "@/components/common/Form";
import { toast } from "sonner";
import { loginFormControls } from "@/config";
import { loginUser } from "../../store/authSlice";  
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

   const onSubmit = async(event)=> {
    event.preventDefault();

    const data = await dispatch(loginUser(formData));

    if (data?.payload?.success) {
      toast.success(data?.payload?.message); // ✅ Correct toast usage
    } else {
      toast.error(data?.payload?.message); // ✅ Shows error clearly
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Login;
