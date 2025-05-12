import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>Something went wrong</p>
      <p>{err.status}:{err.statusText}</p>
      <p>Page Not Found</p>
      <p>Check the URL</p>
      <p>Go back to the previous page</p>
      <p>Try again later</p>
      <p>Contact support</p>
      <p>Check your internet connection</p>
      <p>Check your browser settings</p>
    </div>
  );
};
export default Error;
