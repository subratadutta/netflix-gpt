export const checkValidateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  if (!isEmailValid) return 'Email ID is not valid';
  if (!isPasswordValid) return 'Password is not valid';
  return null;
};

export const checkNameValidateData = (name, email, password) => {
  const isName = /^$/g.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  if (isName) return 'Name should not be blank';
  if (!isEmailValid) return 'Email ID is not valid';
  if (!isPasswordValid) return 'Password is not valid';
  return null;
};
