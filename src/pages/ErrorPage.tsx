import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <div className="bg-yellow text-blue h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {
              isRouteErrorResponse(error) ?
                  (
                      // note that error is type `ErrorResponse`
                      error.data || error.statusText
                  ) :
                  'Unknown error message'
          }
        </p>
      </div>
      
    </div>
  );
}