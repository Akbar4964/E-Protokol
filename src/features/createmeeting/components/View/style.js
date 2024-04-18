import styled from "styled-components";

export const Views = styled.div`
  margin-bottom: 40px;
  .none {
    display: none;
  }
  .meeting {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0px 2px 25px 0px #00000014;
    padding: 30px;
  }
  .meeting-title {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    line-height: 38.73px;
    color: #000;
  }
  .meeting-line {
    width: 100%;
    margin-top: 30px;
    border-radius: 6px;
    border: 2px solid #ddf8f0;
  }
  .routes {
    display: flex;
    justify-content: end;
    gap: 7px;
    margin: 40px 0;
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
  .title {
    margin-top: 20px;
    font-family: Inter;
    font-size: 22px;
    font-weight: 600;
    line-height: 26.63px;
    color: #000;
  }
  .label {
    margin-top: 20px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    letter-spacing: 0.5px;
    color: #5d6b8a;
  }
  .meet-content {
    margin-top: 5px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    text-align: left;
  }
  .meet-details {
    margin-top: 5px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    letter-spacing: 0.5px;
    text-align: left;
    width: 100%;
  }
  .meet-row {
    display: flex;
    gap: 169px;
  }
  /* .meeting-users {
    width: 355px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid #ddf8f0;
    margin-top: 20px;
  } */
  .meet-user {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 44px;
    position: relative;
    border: 1px solid #ddf8f0;
    width: 455px;
    border-radius: 8px;
    border: 1px solid #ddf8f0;
    margin-top: 20px;
  }
  .meeting-file {
    width: 444px;
    height: 37px;
    border-radius: 8px;
    border: 1px solid #ddf8f0;
    margin-top: 20px;
  }
  .uid {
    cursor: pointer;
  }
  .meet-uid {
    display: none;
  }
  .uid:hover ~ .meet-uid {
    display: block;
    position: absolute;
    top: -40px;
    left: 166px;
    border: 1px solid blueviolet;
    padding: 0 10px;
    border-radius: 12px;
    color: darkred;
    font-weight: 700;
  }
  .btns {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 22px;
    margin-top: 30px;
  }
  .next-btn {
    button {
      width: 140px;
      height: 40px;
      border-radius: 8px;
      color: #fff;
      background-color: #208667;
      border: 0;
      margin-top: 22px;
    }
  }
  .prev-btn {
    button {
      width: 140px;
      height: 40px;
      border-radius: 8px;
      color: #208667;
      background-color: #fff;
      border: 1px solid #208667;
    }
  }

  .meet-users-position {
    width: 100px;
  }

  .meet-users-name {
    width: 177px;
  }
`;
