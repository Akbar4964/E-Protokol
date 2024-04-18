import styled from "styled-components";

export const Offers = styled.div`
  .meeting-user-content {
    display: flex;
    position: relative;
    .users {
      width: 455px;
      height: 60px;
      margin-left: 30px;
      border-radius: 8px;
      background: #ddf8f0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      .tr {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #208667;
      }
      .user-name {
        padding-left: 111px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #208667;
      }
      .user-position {
        padding-left: 130px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #208667;
      }
    }
    .user-list {
      height: 300px;
      margin-top: 20px;
      overflow-y: scroll;
    }
    ::-webkit-scrollbar {
      width: 3px;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #ddf8f0;
    }

    ::-webkit-scrollbar-thumb {
      background: #208667;
    }
    .participant {
      width: 433px;
      height: 55px;
      margin-left: 30px;
      margin-top: 7px;
      border-radius: 8px;
      border: 1px solid #ddf8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      cursor: pointer;
      .cols {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        text-align: center;
        margin-bottom: 15px;
      }
      .participant-name {
        width: 200px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        text-align: center;
      }
      .participant-position {
        width: 70px;
        overflow: hidden;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        text-align: center;
      }
    }
    .del-edit {
      display: none;
    }
    .participant:hover {
      background-color: #ebebeb;
      transition: all 0.5s ease-in-out;
      .del-edit {
        width: 55px;
        height: 40px;
        right: 310px;
        box-shadow: 4px 4px 15px 0px #00000014;
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0 8px;
        gap: 10px;
        button {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #ddf8f0;
          border: 0;
          cursor: pointer;
        }
        button:hover {
          transition: all 0.5s ease-in-out;
          background-color: #208667;
        }
      }
    }
    .form {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .offered {
      margin: 0 20px;
      .offer-input {
        width: 232px;
        height: 48px;
        border-radius: 6px;
        border: 1px solid #208667;
        margin-top: 22px;
        color: #208667;
      }
      .offer-btn {
        width: 48px;
        height: 48px;
        border: 1px solid #208667;
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 15px;
          background-color: #208667;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          padding-bottom: 2px;
        }
      }
      .label {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: #000;
      }
      .btns {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        margin-top: 322px;
      }
      .prev-btn {
        button {
          width: 83px;
          height: 40px;
          border-radius: 8px;
          margin-top: 22px;
          border: 1px solid #208667;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          line-height: 16.94px;
          background-color: #fff;
          color: #208667;
          cursor: pointer;
        }
      }
      .next-btn {
        button {
          width: 100px;
          height: 40px;
          margin-top: 22px;
          border-radius: 8px;
          border: 1px solid #208667;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          line-height: 16.94px;
          background-color: #208667;
          color: #fff;
        }
      }
    }
  }
  :where(
      .css-dev-only-do-not-override-1ae8k9u
    ).ant-select-outlined.ant-select-status-error:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border: 0;
  }
`;
