import React from "react";
import InputField from "../componnets/InputField";
import PrimaryButton from "../componnets/PrimaryButton";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Instagram</h1>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <PrimaryButton text="Login" />
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
