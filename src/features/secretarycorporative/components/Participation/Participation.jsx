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

  const [test, setTest] = useState({});

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

  return (
    <>
      <Attends>
        <div className="container">
          <div className="routes">
            <NavLink to={test.rout1}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={AttendPageArrowImg} />
            <NavLink to={test.route2}>
              <p className="meetingspage">Yig'ilishda ishtirok etish</p>
            </NavLink>
          </div>
          <div className="participation-buttons">
            <div className="participation-buttons-row">
              <button className="participation-active-button">
                <NavLink to={test.route2}>AKTIV UCHRASHUVLAR</NavLink>
              </button>
              <button className="participation-archive-button">
                <NavLink to={test.route3}>ARXIV UCHRASHUVLAR</NavLink>
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
            <NavLink key={id} to={`activemeetings/${item.forename}/${item.id}`}>
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
