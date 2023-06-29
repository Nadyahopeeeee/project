import React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../../consts";


export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.Main}>Back to main page</Link>
    </>
  )
}
