import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "You need at least 3 chars")
    .max(50, "Too Long!")
    .required("Put your username below"),
  password: Yup.string()
    .min(6, "You need at least 6 chars")
    .max(50, "Too Long!")
    .required("You need at least 6 chars"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "You need at least 6 chars")
    .max(50, "Too Long!")
    .required("You need at least 6 chars"),
  email: Yup.string().email("Invalid email").required("Put your email below"),
});
