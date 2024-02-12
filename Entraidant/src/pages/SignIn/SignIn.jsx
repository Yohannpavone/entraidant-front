import styles from "./SignIn.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signin } from "../../apis/auth.jsx";

function SignIn() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Il faut votre email")
      .email("l'email n'est pas valide"),
    password: yup
      .string()
      .required("Il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
  });

  const initialValues = {
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
  });

  const submit = handleSubmit(async (credentials) => {
    console.log(credentials);
    try {
      clearErrors();
      const user = await signin();
      console.log(user);
      // const user = await createUser(credentials);
      // navigate("/signin");
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
        <h2 className="mb-10">Connexion</h2>
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
            <div className="mb-10">
              <p className="form-error">{errors.password.message}</p>
            </div>
          )}
        </div>
        {errors.generic && (
          <p className="form-erroor"> {errors.generic.message}</p>
        )}
        <div>
          <button disabled={isSubmitting} className="btn btn-primary">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
