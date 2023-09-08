"use client";
import React, { useState } from "react";
import InputField from "../componnets/InputField";
import PrimaryButton from "../componnets/PrimaryButton";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const SignupPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [lastPasswordValue, setLastPasswordValue] = useState("");
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Instagram</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="text"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                {/* {errors && <p className="text-red-500">{errors.message}</p>} */}
              </>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
                {/* {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )} */}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setLastPasswordValue(e.target.value)}
              />
            )}
          />
          <Controller
            name="retypePassword"
            control={control}
            rules={{
              validate: (value) =>
                value == lastPasswordValue || "Password missmatch",
            }}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="password"
                  label="Retype Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                {errors.retypePassword && (
                  <p className="text-red-500">
                    {errors?.retypePassword?.message?.toString()}
                  </p>
                )}
              </>
            )}
          />
          <PrimaryButton type="submit" text="Signup" />
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Already had an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
