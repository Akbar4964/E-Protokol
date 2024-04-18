import styled from "styled-components";
import {
  MainPageBackground1,
  MainPageBackground2,
  MainPageBackground3,
} from "../../assets/icons";

export const Header = styled.header`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  animation-name: change;
  animation-duration: 22s;
  animation-iteration-count: infinite;
  @keyframes change {
    0% {
      background-image: url(${MainPageBackground1});
    }
    35% {
      background-image: url(${MainPageBackground2});
    }
    70% {
      background-image: url(${MainPageBackground3});
    }
    100% {
      background-image: url(${MainPageBackground1});
    }
  }
`;
