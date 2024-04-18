import React, { useState } from "react";
import { AddedUser } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../../consts/routes";
import { UsersInfoPageArrowImg } from "../../../../assets/icons";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import NumInput from "../NumInput/NumInput";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../../../services/api";
import { userMeetingOrganRoles } from "../../../../consts";

function AddUser() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const {
    mutate,
    isPending: postUserLoading,
    error: postUserError,
  } = useMutation({
    mutationFn: async (data) => {
      return await API.postUser(data);
    },
    onSuccess: (data) => {},
    onError: (data) => {
      console.log("onError", data);
    },
  });

  function handleSubmit(event) {
    setPasswordError("Iltimos parolni tasdiqlang!");
    if (password === confirmPassword) {
      form.resetFields();
      setConfirmPassword("");
      setPasswordError("");
      mutate(event);
      setTimeout(() => navigate(routes.USERS), 1000);
    } else {
      setPasswordError("Iltimos parolni tasdiqlang!");
    }
  }

  return (
    <>
      <AddedUser>
        <div className="container">
          <div className="routes">
            <NavLink to={routes.ADMIN}>
              <p className="homepage">Bosh sahifa</p>
            </NavLink>
            <img src={UsersInfoPageArrowImg} alt="" />
            <NavLink to={routes.USERS}>
              <p className="homepage">Foydalanuvchilar</p>
            </NavLink>
            <img src={UsersInfoPageArrowImg} alt="" />
            <NavLink to={routes.CREATEUSER}>
              <p className="meetingspage">Foydalanuvchi yaratish</p>
            </NavLink>
          </div>
          <div className="users">
            <Form form={form} onFinish={handleSubmit}>
              <div className="row">
                <div>
                  <div className="label">Ism</div>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Iltimos ism kiriting!" },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">Familiya</div>
                  <Form.Item
                    name="surname"
                    rules={[
                      { required: true, message: "Iltimos familiya kiriting!" },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">Sharif</div>
                  <Form.Item
                    name="fatherName"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos otasining ismini kiriting!",
                      },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">PINFL</div>
                  <Form.Item
                    name="pinfl"
                    rules={[
                      { required: true, message: "Iltimos pinfl kiriting!" },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                </div>
                <div>
                  <div className="label">Telefon</div>
                  <NumInput />
                  <div className="label">Fuqaroligi</div>
                  <Form.Item
                    name="citizen"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos fuqaroligini kiriting!",
                      },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">Shaxs turi</div>
                  <Form.Item
                    name="personType"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos shaxs turini tanlang!",
                      },
                    ]}
                  >
                    <Select placeholder="Tanlang" className="user-input">
                      <Select.Option value="Jis.Shaxs">
                        Jismoniy shaxs
                      </Select.Option>
                      <Select.Option value="Yur.Shaxs">
                        Yuridik shaxs
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <div className="label">Lavozimi</div>
                  <Form.Item
                    name="position"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos lavozimini kiriting!",
                      },
                    ]}
                  >
                    <Select placeholder="Tanlang" className="user-input">
                      <Select.Option value={userMeetingOrganRoles.CHAIRMAN}>
                        Rais
                      </Select.Option>
                      <Select.Option value={userMeetingOrganRoles.USER}>
                        Kuzatuv Kengashi Azosi
                      </Select.Option>
                      <Select.Option value={userMeetingOrganRoles.OFFERED}>
                        Taklif etilganlar
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <div className="label">E-mail/G-mail</div>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos emailingizni kiriting!",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      className="user-input"
                      placeholder="Kiriting"
                    />
                  </Form.Item>
                  <div className="label">Login</div>
                  <Form.Item
                    name="login"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos login kiriting!",
                      },
                    ]}
                  >
                    <Input className="user-input" placeholder="Kiriting" />
                  </Form.Item>
                  <div className="label">Parol</div>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos parol kiriting!",
                      },
                    ]}
                  >
                    <Input.Password
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="user-input"
                      placeholder="Kiriting"
                    />
                  </Form.Item>
                  <div className="label">Parolni qayta kiriting</div>
                  <Form.Item
                    validateStatus={passwordError && "error"}
                    help={passwordError}
                    rules={[
                      {
                        required: true,
                        message: "Iltimos parolni qayta kiriting!",
                      },
                    ]}
                  >
                    <Input.Password
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="user-input"
                      placeholder="Kiriting"
                    />
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

export default AddUser;
