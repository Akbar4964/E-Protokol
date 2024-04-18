import React, { useState } from "react";
import { Offers } from "./style";
import { Button, Form, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { queryKeys } from "../../../../query/keys";
import { toast } from "react-toastify";

function Offer({
  activeButton,
  handleButtonClick,
  Prev,
  meetingsOrganId,
  users,
  setDisabled,
  postMeeting,
  createdMeetingId,
  refetch,
  setmeetingsUsers,
}) {
  const [offerUser, setOfferUser] = useState([]);

  const {
    mutate,
    isLoading: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.putMeeting(createdMeetingId, data);
    },
    onSuccess: (data) => {
      setOfferUser(data.offerUsers);
      refetch();
    },
    onError: (data) => {
      console.log("onError", data);
    },
  });

  const { error, data, isLoading } = useQuery({
    queryKey: [queryKeys.getMeetingsOrganById],
    queryFn: () => API.getMeetingsOrganById(meetingsOrganId),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  function handleSubmit(event) {
    let offeredUser = users.find((offerUser) => {
      return offerUser.id == event.offerUsers;
    });
    let id;
    const oldObject = postMeeting.offerUsers;
    const newObject = { ...postMeeting, offerUsers: oldObject };
    const newMergedObject = { ...newObject };
    newMergedObject.offerUsers.forEach((user) => (id = user.id));
    if (offeredUser.id == data.secretary.id) {
      toast.info("Bu ma'lumot mavjud!");
    } else if (offeredUser.id == data.chairman.id) {
      toast.info("Bu ma'lumot mavjud!");
    } else if (offeredUser.id == data.constantUser.id) {
      toast.info("Bu ma'lumot mavjud!");
    } else if (offeredUser.id == id) {
      toast.info("Bu ma'lumot mavjud!");
    } else {
      oldObject.push(offeredUser);
    }
    if (offeredUser) {
      setmeetingsUsers([
        data.secretary,
        data.chairman,
        data.constantUser,
        offeredUser,
      ]);
    }
    mutate(newMergedObject);
  }

  return (
    <>
      <Offers>
        <div
          className={
            activeButton === 3
              ? "none"
              : activeButton === 1
              ? "none"
              : "meeting-user-content"
          }
        >
          <div>
            <table>
              <thead className="users">
                <tr>
                  <th className="tr">T/R</th>
                  <th className="user-name">ISHTIROKCHI</th>
                  <th className="user-position">ROLI</th>
                </tr>
              </thead>
            </table>
            <div className="user-list">
              <tbody>
                <tr className="participant">
                  <p className="cols">{data.secretary.id}</p>
                  <p className="participant-name">{`${data.secretary.name.charAt()}. ${data.secretary.fatherName.charAt()}. ${
                    data.secretary.surname
                  }`}</p>
                  <p className="participant-position">
                    {data.secretary.position}
                  </p>
                </tr>
                <tr className="participant">
                  <p className="cols">{data.chairman.id}</p>
                  <p className="participant-name">{`${data.chairman.name.charAt()}. ${data.chairman.fatherName.charAt()}. ${
                    data.chairman.surname
                  }`}</p>
                  <p className="participant-position">
                    {data.chairman.position}
                  </p>
                </tr>
                <tr className="participant">
                  <p className="cols">{data.constantUser.id}</p>
                  <p className="participant-name">{`${data.constantUser.name.charAt()}. ${data.constantUser.fatherName.charAt()}. ${
                    data.constantUser.surname
                  }`}</p>
                  <p className="participant-position">
                    {data.constantUser.position}
                  </p>
                </tr>
                {offerUser.map((item, id) => (
                  <tr key={id} className="participant">
                    <p className="cols">{id + 1}</p>
                    <p className="participant-name">{`${item.name.charAt()}. ${item.fatherName.charAt()}. ${
                      item.surname
                    }`}</p>
                    <p className="participant-position">{item.position}</p>
                  </tr>
                ))}
              </tbody>
            </div>
          </div>
          <div className="offered">
            <Form onFinish={handleSubmit}>
              <div className="label">Taklif etilganlar</div>
              <div className="form">
                <Form.Item
                  name="offerUsers"
                  rules={[
                    {
                      message: "Foydalanuvchini taklif qiling!",
                    },
                  ]}
                >
                  <Select
                    allowClear
                    placeholder="Tanlang"
                    className="offer-input"
                  >
                    {users.map((item, id) => (
                      <Select.Option key={id} value={item.id}>
                        {`${item.name.charAt(0)}.${item.surname} ${
                          item.fatherName
                        }`}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Button className="offer-btn" htmlType="submit">
                  <p>+</p>
                </Button>
              </div>
            </Form>
            <div className="btns">
              <div className="prev-btn">
                <Prev
                  onClick={(event) => handleButtonClick(2)}
                  isActive={activeButton === 2}
                >
                  Ortga
                </Prev>
              </div>
              <div className="next-btn">
                <Button onClick={() => handleButtonClick(3)} htmlType="button">
                  Keyingisi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Offers>
    </>
  );
}

export default Offer;
