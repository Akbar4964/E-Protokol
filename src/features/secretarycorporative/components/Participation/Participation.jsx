import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Attends } from "./style";
import { routes } from "../../../../consts/routes";
import {
  AttendPageArrowImg,
  AttendPageSearchImg,
} from "../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { queryKeys } from "../../../../query/keys";
import Spinner from "../../../../consts/Spinner";
import { useSelector } from "react-redux";
import { userMeetingOrganRoles } from "../../../../consts";

function Participation({ meetingsOrgans, render }) {
  const authUser = useSelector((store) => store.users.authUser);

  const authPosition = authUser.user.position;

  const filterPosition = meetingsOrgans.filter(
    (item) =>
      item.secretary.position === authPosition ||
      item.chairman.position === authPosition ||
      item.constantUser.position === authPosition
  );

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsKey],
    queryFn: () => API.getMeetings(),
  });

  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  function route1() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return routes.ADMIN;
    } else {
      return routes.ATTEND_USER;
    }
  }

  function route2() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return routes.ARCHIVE_MEETINGS;
    } else {
      return routes.USER_ARCHIVE_MEETINGS;
    }
  }

  function route3() {
    if (authPosition == userMeetingOrganRoles.SECRETARY) {
      return routes.ACTIVE_MEETINGS;
    } else {
      return routes.USER_ACTIVE_MEETINGS;
    }
  }

  return (
    <>
      <Attends>
        <div className="container">
          <div className="routes">
            <NavLink to={route1()}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={AttendPageArrowImg} />
            <NavLink to={route1()}>
              <p className="meetingspage">Yig'ilishda ishtirok etish</p>
            </NavLink>
          </div>
          <div className="participation-buttons">
            <div className="participation-buttons-row">
              <button className="participation-active-button">
                <NavLink to={route1()}>AKTIV UCHRASHUVLAR</NavLink>
              </button>
              <button className="participation-archive-button">
                <NavLink to={route2()}>ARXIV UCHRASHUVLAR</NavLink>
              </button>
            </div>
            <div className="participation-search-input-row">
              <img src={AttendPageSearchImg} />
              <input
                className="participation-search-input"
                placeholder="Qidirish"
                type="text"
              />
            </div>
          </div>
          {filterPosition.map((item, id) => (
            <NavLink key={id} to={`${route3()}/${item.id}`}>
              <div className="meetings-organ">
                <div>
                  <p className="meetings-organ-title">{item.forename}</p>
                  <p className="meetings-organ-text">{item.inn}</p>
                </div>
                <div className="meetings-organ-circle">{id + 1}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </Attends>
    </>
  );
}

export default Participation;
