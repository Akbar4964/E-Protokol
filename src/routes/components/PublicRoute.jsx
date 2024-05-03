import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { routes } from "../../consts/routes";
import { useSelector } from "react-redux";
import { userMeetingOrganRoles } from "../../consts";

function PublicRoute({ children }) {
  const authUser = useSelector((store) => store.users.authUser);

  const { pathname } = useLocation();

  const authRole = authUser.user.position;

  if (authUser.isLogged && authUser.user)
    if (authRole === userMeetingOrganRoles.OFFERED) {
      if (!pathname.includes(routes.ATTEND_USER)) {
        return <Navigate to={routes.ATTEND_USER} replace />;
      }
    }

  if (authRole === userMeetingOrganRoles.SECRETARY) {
    if (!pathname.includes(routes.ADMIN)) {
      return <Navigate to={routes.ADMIN} replace />;
    }
  }

  if (authRole === userMeetingOrganRoles.USER) {
    if (!pathname.includes(routes.ATTEND_USER)) {
      return <Navigate to={routes.ATTEND_USER} replace />;
    }
  }

  if (authRole === userMeetingOrganRoles.CHAIRMAN) {
    if (!pathname.includes(routes.ATTEND_USER)) {
      return <Navigate to={routes.ATTEND_USER} replace />;
    }
  }
  return children;
}

export default PublicRoute;
