import React from "react";
import { Views } from "./style";
import { Button, Form } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import { MeetingsPageArrowImg } from "../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { getTime } from "../../../../helpers";
import { queryKeys } from "../../../../query/keys";
import { toast } from "react-toastify";

function View({
  activeButton,
  handleButtonClick,
  Prev,
  postMeeting,
  meetingsUsers,
}) {
  const navigate = useNavigate();

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsMatter],
    queryFn: () => API.getMeetingsMatter(),
  });
  if (data) {
    refetch();
  }
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  function handleClick() {
    toast.success("Meeting muvaffaqiyatli qo'shildi");
    setTimeout(() => navigate(routes.MEETING), 1500);
  }

  return (
    <>
      <Views>
        <div className="container">
          <div className="view">
            <div className="routes">
              <NavLink to={routes.ADMIN}>
                <p className="homepage">Bosh sahifa</p>
              </NavLink>
              <img src={MeetingsPageArrowImg} alt="" />
              <NavLink to={routes.MEETING}>
                <p className="homepage">Yig’ilishlar</p>
              </NavLink>
              <img src={MeetingsPageArrowImg} alt="" />
              <NavLink to={routes.MEETING}>
                <p className="meetingspage">Yig’ilish tashkil etish</p>
              </NavLink>
            </div>
            <div className="meeting">
              <h1 className="meeting-title"></h1>
              <div className="meeting-line"></div>
              <h1 className="title">Yig’ilish ma’lumotlari</h1>
              <div className="meetings-info">
                <div className="meet-row">
                  <div>
                    <div className="label">ID Protokol</div>
                    <p className="meet-content">{postMeeting.protokolId}</p>
                    <div className="label">
                      Yig’ilish bo’lib o’tadigan shahar
                    </div>
                    <p className="meet-content">{postMeeting.city}</p>
                    <div className="label">Manzil</div>
                    <p className="meet-content">{postMeeting.address}</p>
                  </div>
                  <div>
                    <div className="label">Yig’ilish bo’lib o’tadigan sana</div>
                    <p className="meet-content">
                      {`${getTime(postMeeting.time).day}.${
                        getTime(postMeeting.time).month
                      }.${getTime(postMeeting.time).year}`}
                    </p>
                    <div className="label">Vaqti</div>
                    <p className="meet-content">
                      {`${getTime(postMeeting.time).hour}:${
                        getTime(postMeeting.time).minute
                      }`}
                    </p>
                    <div className="label">Ro’yxatdan o’tish boshlanishi</div>
                    <p className="meet-content">
                      {`${getTime(postMeeting.registerTime).hour}:${
                        getTime(postMeeting.registerTime).minute
                      }`}
                    </p>
                    <div className="label">Ro’yxatdan o’tish tugashi</div>
                    <p className="meet-content">
                      {`${getTime(postMeeting.endTime).hour}:${
                        getTime(postMeeting.endTime).minute
                      }`}
                    </p>
                  </div>
                </div>
                <div className="label">Yig’ilish tavsilotlari</div>
                <p className="meet-details">{postMeeting.details}</p>
                <div className="meeting-line"></div>
              </div>
              <h1 className="title">Yig’ilish ishtirokchilari</h1>
              <div className="meeting-users">
                {meetingsUsers.map((item, id) => (
                  <div key={id} className="meet-user">
                    <p className="meet-users-id">{id + 1}</p>
                    <p className="meet-users-name">{`${item.name.charAt()}.${item.fatherName.charAt()}.${
                      item.surname
                    }`}</p>
                    <p className="meet-users-position">{item.position}</p>
                  </div>
                ))}
                <div className="meeting-line"></div>
              </div>
              <div>
                {data
                  .filter((item) => item.meetingId === postMeeting.organId)
                  .map((item, index) => (
                    <div key={index} className="meet-matter">
                      <h1 className="title">{index + 1}-masala</h1>
                      <div className="meet-row">
                        <div>
                          <div className="label">Masala</div>
                          <p className="meet-content">{item.dayIssue}</p>
                          <div className="label">Spiker</div>
                          <p className="meet-content">{item.speaker}</p>
                        </div>
                        <div>
                          <div className="label">Masalaga beriladigan vaqt</div>
                          <p className="meet-content">{item.waitTime}</p>
                          <div className="label">Tanaffus</div>
                          <p className="meet-content">{item.reglamentTime}</p>
                        </div>
                      </div>
                      <div className="label">Yig'ilish fayllari</div>
                      <div className="meet-user">
                        <p className="meet-users-id">{index + 1}</p>
                        <p className="meet-users-name">file</p>
                        <p className="uid">type</p>
                        <p className="meet-uid">uid👀⁉️</p>
                      </div>
                      <div className="label">Masala yuzasidan ma'lumot</div>
                      <p className="meet-content">{item.infoIssue}</p>
                    </div>
                  ))}
              </div>
              <div className="btns">
                <div className="prev-btn">
                  <Prev
                    onClick={() => handleButtonClick(3)}
                    isActive={activeButton === 3}
                  >
                    Ortga
                  </Prev>
                </div>
                <div className="next-btn">
                  <Form.Item>
                    <Button onClick={handleClick} type="button">
                      Yaratish
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Views>
    </>
  );
}

export default View;
