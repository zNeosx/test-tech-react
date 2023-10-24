import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center min-h-screen gap-6"
    >
      <div className="flex items-center gap-2 my-6">
        <img
          src="../../public/json-logo.png"
          alt="logo"
          width={24}
          height={24}
          className="object-cover"
        />
        <span className="text-gray-600 font-bold logo-text">JSON.</span>
      </div>
      <h2 className="text-md text-muted-foreground font-semibold">
        {error.status} ERROR
      </h2>
      <h3 className="text-5xl text-muted-foreground font-normal">
        Page Not Found.
      </h3>
      <p className="italic">Sorry, an unexpected error has occurred.</p>
      {/* <p className="text-muted-foreground text-sm">
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to={"/"} className={clsx(buttonVariants())}>
        Go back home
      </Link>
    </div>
  );
}
