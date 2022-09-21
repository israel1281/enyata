import React from "react";
import Input from "../../atoms/input";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6">
          <div className="mb-16">
            <h3 className="font-semibold text-xl mb-1">Login</h3>
            <h5 className="font-llight text-sm">
              Kindly enter your details to login
            </h5>
          </div>

          <div className="mt-8">
            <div className="mt-1">
              <Input label="email" type="email" />
            </div>
          </div>

          <div>
            <div className="mt-1">
              <Input label="password" type="password" />
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

          <div className="text-sm mt-2">
            <a
              href="https://tailwindui.com/components/application-ui/forms/sign-in-forms#"
              className="ml-32 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>

          <div className="flex ml-20 space-x-2 text-sm mt-16">
            <a href="#" className="font-medium underline">
              Privacy Policy
            </a>
            <h5 className="text-gray-300">and</h5>
            <a href="#" className="font-medium underline">
              Terms of services
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
