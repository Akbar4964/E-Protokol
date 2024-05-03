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
    !pathname.includes(routes.ATTEND_USER) &&
    authRole === userMeetingOrganRoles.USER &&
    userMeetingOrganRoles.OFFERED
  ) {
    return <Navigate to={routes.ATTEND_USER} replace />;
  }

  if (
    !pathname.includes(routes.ATTEND_USER) &&
    authRole === userMeetingOrganRoles.USER
  ) {
    return <Navigate to={routes.ATTEND_USER} replace />;
  }

  if (
    !pathname.includes(routes.ATTEND_USER) &&
    authRole === userMeetingOrganRoles.CHAIRMAN
  ) {
    return <Navigate to={routes.ATTEND_USER} replace />;
  }
  return children;
}

export default PrivateRoute;
