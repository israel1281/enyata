import React, { useState, useEffect } from "react";
import Input from "../../atoms/input";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/Validate";

export default function Form() {
  const initialState = {
    email: "",
    password: "",
  };
  const [emailErr, setEmailErr] = useState("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [userData, setUserData] = useState(initialState);

  const { email, password } = userData;
  const navigate = useNavigate();

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-zA-Z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const uppercasePassword = uppercaseRegExp.test(password);
  const lowercasePassword = lowercaseRegExp.test(password);
  const digitsPassword = digitsRegExp.test(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (
      value.length < 8 ||
      !uppercasePassword ||
      !lowercasePassword ||
      !digitsPassword
    ) {
      setPasswordErr(
        "Password must contain at least one Uppercase letter,Lowercase letter and number"
      );
      setPasswordError(true);
    } else {
      setPasswordErr("");
      setPasswordError(false);
    }
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordErr) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-16">
            <h3 className="font-semibold text-xl mb-1">Login</h3>
            <h5 className="font-llight text-sm">
              Kindly enter your details to login
            </h5>
          </div>

          <div className="mt-8">
            <div className="mt-1">
              <Input
                error={emailError}
                label="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                helperText={emailErr}
              />
            </div>
          </div>

          <div>
            <div className="mt-1">
              <Input
                error={passwordError}
                label="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                helperText={passwordErr}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>

          <div className="text-sm mt-2 w-full flex justify-center items-center">
            <Link
              to="/"
              className="flex items-center jutsify-center font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="flex w-full h-20 mb-0 justify-center text-sm mt-16">
            <div className="mt-10 flex space-x-2">
              <Link to="/" className="font-medium underline">
                Privacy Policy
              </Link>
              <h5 className="text-gray-300">and</h5>
              <Link to="/" className="font-medium underline">
                Terms of services
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
