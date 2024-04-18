import styled from "styled-components";

export const AddedUser = styled.div`
  margin: 40px 0;
  .routes {
    display: flex;
    justify-content: end;
    gap: 7px;
    .homepage {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
      color: #20866780;
    }
    .meetingspage {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
      color: #208667;
    }
  }
  .users {
    width: 100%;
    height: auto;
    box-shadow: 0px 2px 25px 0px #00000014;
    border-radius: 12px;
    padding: 30px;
    margin-top: 40px;
  }
  .label {
    margin-top: 7px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    color: #000;
  }
  .user-input {
    width: 329px;
    height: 48px;
    margin-top: 5px;
    border-radius: 6px;
    border: 1px solid #208667;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    color: #208667;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .submit-btn {
    text-align: right;
  }
  .btn {
    width: 100px;
    height: 40px;
    border-radius: 6px;
    color: #fff;
    background-color: #208667;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
  }
`;
