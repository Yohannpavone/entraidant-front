import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    email: yup
      .string()
      .required("Il faut votre email")
      .email("l'email n'est pas valide"),
    password: yup
      .string()
      .required("Il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const submit = handleSubmit(async (user) => {
    console.log(user);
    try {
      clearErrors();
      // const user =
      await createUser(user);
      navigate("/signin");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center">
      <form
        onSubmit={submit}
        className={`${styles.form} d-flex flex-column card p-20`}
      >
        <h2 className="mb-10">Inscription</h2>
        <div className="mb-10 d-flex flex-column ">
          <label className="label" htmlFor="name">
            Nom
          </label>
          <input
            className="input"
            type="text"
            name="name"
            {...register("name")}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="text"
            name="email"
            {...register("email")}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="email">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="email">
            Confirmation password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <div className="mb-10">
              <p className="form-error">{errors.confirmPassword.message}</p>
            </div>
          )}
        </div>
        {errors.generic && (
          <p className="form-erroor"> {errors.generic.message}</p>
        )}
        <div>
          <button disabled={isSubmitting} className="btn btn-primary">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
