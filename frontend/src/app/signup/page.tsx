"use client";
import React, { useState } from "react";
import PrimaryButton from "../componnets/PrimaryButton";
import { useForm, Controller } from "react-hook-form";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [validateErrors, setValidateErrors] = useState<any>([]);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [messageSnackBar, setMessageSnackBar] = useState("");
  const password = watch("password");
  const onSubmit = async (data: any) => {
    const { retypePassword, ...formData } = data;
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setValidateErrors(await res.errors);
        } else {
          throw new Error("Error signing up");
        }
      }
      router.push("/login");
      setOpenSnackBar(true);
      setMessageSnackBar("SignUp Success");

      console.log(456, res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
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
                {validateErrors && validateErrors.name && (
                  <p className="text-red-500">{validateErrors.name}</p>
                )}
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
                {validateErrors && validateErrors.email && (
                  <p className="text-red-500">{validateErrors.email}</p>
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                {validateErrors && validateErrors.password && (
                  <p className="text-red-500">{validateErrors.password}</p>
                )}
              </>
            )}
          />
          <Controller
            name="retypePassword"
            control={control}
            rules={{
              validate: (value) => value == password || "Password missmatch",
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
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          {messageSnackBar}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignupPage;
