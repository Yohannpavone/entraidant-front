import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../apis/users.jsx";

function SignUp() {
  const navigate = useNavigate();
  // utilisation de la vérification des données avec yup
  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Il faut préciser votre nom utilisateur")
      .min(2, "Un vrai nom"),
    firstname: yup
      .string()
      .required("Il faut préciser votre prénom")
      .min(2, "Un vrai prénom"),
    lastname: yup
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

  // initialisation des valeurs par défault
  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  // deconstruction de l'objet useform fourni par react-hook-form pour utiliser les fonctions utiles au projet
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
          <label className="label" htmlFor="username">
            Nom d'utilisateur
          </label>
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            {...register("username")}
          />
          {errors.username && (
            <p className="form-error">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-10 d-flex flex-column ">
          <label className="label" htmlFor="firstname">
            Prénom
          </label>
          <input
            className="input"
            type="text"
            name="firstname"
            id="firstname"
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="form-error">{errors.firstname.message}</p>
          )}
        </div>
        <div className="mb-10 d-flex flex-column ">
          <label className="label" htmlFor="lastname">
            Nom
          </label>
          <input
            className="input"
            type="text"
            name="lastname"
            id="lastname"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="form-error">{errors.lastname.message}</p>
          )}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="text"
            name="email"
            id="email"
            {...register("email")}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label className="label" htmlFor="confirmPassword">
            Confirmation password
          </label>
          <input
            className="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && (
            <div className="mb-10">
              <p className="form-error">{errors.confirmPassword.message}</p>
            </div>
          )}
        </div>
        {errors.generic && (
          <p className="form-error"> {errors.generic.message}</p>
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
