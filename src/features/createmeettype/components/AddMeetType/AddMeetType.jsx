import React, { useState } from "react";
import { AddedUser } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import { MeetingsTypePageArrowImg } from "../../../../assets/icons";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import NumInput from "../NumInput/NumInput";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { toast } from "react-toastify";

function AddMeetType({ users }) {
  const [form] = Form.useForm();

  const [secretary, setSecretary] = useState({});

  const [chairman, setChairman] = useState({});

  const [constantUser, setContantUser] = useState({});

  const navigate = useNavigate();

  const {
    mutate,
    isPending: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (meetingOrgan) => {
      return await API.postMeetingOrgan(meetingOrgan);
    },
    onSuccess: () => {
      toast.success(`Ma'lumot qo'shildi :(`);
      setTimeout(() => navigate(routes.MEETINGTYPE), 1000);
    },
    onError: () => {
      toast.error(`Ma'lumot qo'shilmadi :(`);
    },
  });

  function handleSubmit(event) {
    const secretaryId = users.find((user) => user.id == secretary);
    const chairmanId = users.find((user) => user.id == chairman);
    const constantUserId = users.find((user) => user.id == constantUser);
    const newObject = {
      ...event,
      secretary: secretaryId,
      chairman: chairmanId,
      constantUser: constantUserId,
    };
    mutate(newObject);
    form.resetFields();
  }

  return (
    <>
      <AddedUser>
        <div className="container">
          <div className="routes">
            <NavLink to={routes.ADMIN}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={routes.MEETINGTYPE}>
              <p className="homepage">Yig'ilish turlari</p>
            </NavLink>
            <img src={MeetingsTypePageArrowImg} alt="" />
            <NavLink to={routes.CREATE_MEETINGTYPE}>
              <p className="meetingspage">Yig'ilish turini yaratish</p>
            </NavLink>
          </div>
          <div className="users">
            <Form form={form} onFinish={handleSubmit}>
              <div className="row">
                <div>
                  <div className="label">Nomi</div>
                  <Form.Item
                    name="forename"
                    rules={[
                      { required: true, message: "Iltimos nomini kiriting!" },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">INN</div>
                  <Form.Item
                    name="inn"
                    rules={[
                      { required: true, message: "Iltimos INN kiriting!" },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">Telefon</div>
                  <NumInput />
                  <div className="label">E-mail/G-mail</div>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos email kiriting!",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      className="user-input"
                      placeholder="Kiriting"
                    />
                  </Form.Item>
                </div>
                <div>
                  <div className="label">Yig'ilish kotibi</div>
                  <Form.Item
                    name="secretary"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos yig'ilish kotibini kiriting!",
                      },
                    ]}
                  >
                    <Select
                      onChange={(value) => setSecretary(value)}
                      placeholder="Tanlang"
                      className="user-input"
                    >
                      {users.map((item, id) => (
                        <Select.Option key={id} value={item.id}>
                          {`${item.name} ${item.surname} ${item.fatherName}/${item.enterType}`}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <div className="label">Yig'ilish raisi</div>
                  <Form.Item
                    name="chairman"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos yig'ilish raisini kiriting!",
                      },
                    ]}
                  >
                    <Select
                      onChange={(value) => setChairman(value)}
                      placeholder="Tanlang"
                      className="user-input"
                    >
                      {users.map((item, id) => (
                        <Select.Option key={id} value={item.id}>
                          {`${item.name} ${item.surname} ${item.fatherName}/${item.enterType}`}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <div className="label">Yig'ilishning doimiy a'zolari</div>
                  <Form.Item
                    name="constantUser"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos a'zo kiriting!",
                      },
                    ]}
                  >
                    <Select
                      onChange={(value) => setContantUser(value)}
                      placeholder="Tanlang"
                      className="user-input"
                    >
                      {users.map((item, id) => (
                        <Select.Option key={id} value={item.id}>
                          {`${item.name} ${item.surname} ${item.fatherName}/${item.position}`}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div className="submit-btn">
                <Form.Item>
                  <Button className="btn" htmlType="submit">
                    Yaratish
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </AddedUser>
    </>
  );
}

export default AddMeetType;
