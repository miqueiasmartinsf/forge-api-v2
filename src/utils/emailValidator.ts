
const emailRegEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

export const emailValidator = (email:string) => emailRegEx.test(email);