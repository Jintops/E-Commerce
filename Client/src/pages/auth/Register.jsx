import React, { useState } from "react";
import CommonForm from "@/components/common/Form";
import { toast } from "sonner";
import { registerFormControls } from "@/config";
import { registerUser } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const onSubmit=async(event) =>{
    event.preventDefault();
    
    const data = await dispatch(registerUser(formData));

    if (data?.payload?.success) {
      toast(data?.payload?.message); // ✅ Correct toast usage
      navigate("/auth/login");
    } else {
      toast.error(data?.payload?.message);
       // ✅ Better way to show errors
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
