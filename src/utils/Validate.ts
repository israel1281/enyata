export const emailCheck = (email: string) => {
  const emailErrors: string[] = [];

  if (!email) {
    emailErrors.push("Please add your email");
  } else if (!validateEmail(email)) {
    emailErrors.push("Please add a valid email");
  }
  return {
    errMsg: emailErrors,
    errLength: emailErrors.length,
  };
};

export const passwordCheck = (password: string) => {
  let passwordErrors = "";

  if (!password) {
    passwordErrors = "Please add your password";
  }

  return {
    errMsg: passwordErrors,
    errLength: passwordErrors.length,
  };
};

export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
