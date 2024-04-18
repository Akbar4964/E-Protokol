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
    if (authRole === userMeetingOrganRoles.USER) {
      if (!pathname.includes(routes.USER)) {
        return <Navigate to={routes.USER} replace />;
      }
    }

  if (authRole === userMeetingOrganRoles.SECRETARY) {
    if (!pathname.includes(routes.ADMIN)) {
      return <Navigate to={routes.ADMIN} replace />;
    }
  }

  if (authRole === userMeetingOrganRoles.CHAIRMAN) {
    if (!pathname.includes(routes.ATTENDCHAIRMAN)) {
      return <Navigate to={routes.ATTENDCHAIRMAN} replace />;
    }
  }
  return children;
}

export default PublicRoute;
