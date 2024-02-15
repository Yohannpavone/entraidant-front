import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h2>ErrorPage</h2>
      <p>{error.statusText}</p>
    </>
  );
}

export default ErrorPage;