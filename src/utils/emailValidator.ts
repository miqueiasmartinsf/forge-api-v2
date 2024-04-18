const emailRegEx = /^\S+@\S+\.\S+$/

export const emailValidator = (email:string) => emailRegEx.test(email);