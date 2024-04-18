import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  height: 70px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 2px 45px 0px #0000001a;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar-logo {
      margin-top: 10px;
    }
    .select {
      position: relative;
      cursor: pointer;
      .uz {
        width: 81px;
        height: 40px;
        top: 15px;
        border-radius: 8px;
        gap: 10px;
        background: #208667;
        color: #fff;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Inter;
        padding: 0 20px;
      }
    }
    .ru {
      display: flex;
      gap: 11px;
      margin-top: 7px;
    }
    .select-none {
      display: none;
    }
    .uz:hover ~ .select-none {
      display: block;
      position: absolute;
      top: 41px;
      left: -39px;
      width: 150px;
      height: 70px;
      background-color: #208667;
      display: flex;
      align-items: center;
      font-family: Inter;
      padding-left: 46px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: #fff;
      border-radius: 15px;
    }
    .select-none:hover {
      display: block;
      position: absolute;
      top: 41px;
      left: -39px;
      width: 150px;
      height: 70px;
      background-color: #208667;
      display: flex;
      align-items: center;
      font-family: Inter;
      padding-left: 46px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: #fff;
      border-radius: 15px;
    }
    .ru:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.1);
    }
    .ring {
      width: 40px;
      height: 40px;
      left: 101px;
      padding: 8px;
      border-radius: 12px;
      gap: 10px;
      background-color: #ddf8f0;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .home {
      width: 40px;
      height: 40px;
      left: 101px;
      padding: 8px;
      border-radius: 12px;
      gap: 10px;
      background-color: #ddf8f0;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .item-none {
      display: none;
    }
    .user {
      width: auto;
      height: 40px;
      left: 101px;
      padding: 0 20px;
      border-radius: 12px;
      gap: 10px;
      background-color: #208667;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }
    .row-messages {
      display: flex;
      gap: 33px;
    }
  }
`;
