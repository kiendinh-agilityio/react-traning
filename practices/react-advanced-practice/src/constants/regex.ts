export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/,
  PASSWORD: /^(?=[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/,
  NAME: /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
};
