"use client";
import React, { useState } from "react";
import PrimaryButton from "../componnets/PrimaryButton";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm();
  const onsubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setErrorMessage("Username or Password wrong");
        } else {
          throw new Error("Error login");
        }
      }
      setErrorMessage("");
      localStorage.setItem("access_token", res.access_token);
      localStorage.setItem("refresh_token", res.refresh_token);
      router.push("/");
    } catch (error) {}
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Instagram</h1>
        {<p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onsubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  label="Username or Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </>
            )}
          />
          <PrimaryButton type="submit" text="Login" />
        </form>
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
