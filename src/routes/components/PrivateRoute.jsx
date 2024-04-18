import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../../consts/routes";
import { userMeetingOrganRoles } from "../../consts";

function PrivateRoute({ children }) {
  const authUser = useSelector((store) => store.users.authUser);

  const { pathname } = useLocation();

  const authRole = authUser.user.position;

  if (!authUser.isLogged && !authUser.user) {
    return <Navigate to={routes.HOME} replace />;
  }

  if (
    !pathname.includes(routes.ADMIN) &&
    authRole === userMeetingOrganRoles.SECRETARY
  ) {
    return <Navigate to={routes.ADMIN} replace />;
  }

  if (
    !pathname.includes(routes.USER) &&
    authRole === userMeetingOrganRoles.USER
  ) {
    return <Navigate to={routes.USER} replace />;
  }
  if (
    !pathname.includes(routes.ATTENDCHAIRMAN) &&
    authRole === userMeetingOrganRoles.CHAIRMAN
  ) {
    return <Navigate to={routes.ATTENDCHAIRMAN} replace />;
  }
  return children;
}

export default PrivateRoute;
