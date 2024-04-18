import { routes } from "../consts/routes";
import Secretary from "../pages/secretary";
import ActiveMeetings from "../pages/active-meetings";
import CreateMeeting from "../pages/create-meeting";
import CreateMeetingType from "../pages/create-meeting-type";
import CreateUser from "../pages/create-user";
import EditMeeting from "../pages/edit-meeting";
import MeetingMatter from "../pages/meeting-matter";
import Meeting from "../pages/meetings";
import TypeMeetings from "../pages/meetings-type";
import CorporativeSecretary from "../pages/secretary-corporative";
import Home from "../pages/home";
import Users from "../pages/users";

export const publicRoutes = [{ path: routes.HOME, page: Home }];

export const privateRoutes = [
  { path: routes.ADMIN, page: Secretary },
  { path: routes.MEETING, page: Meeting },
  { path: routes.CREATEMEETING, page: CreateMeeting },
  { path: routes.EDITMEETING + "/:id/", page: EditMeeting },
  { path: routes.USERS, page: Users },
  { path: routes.CREATEUSER, page: CreateUser },
  { path: routes.MEETINGTYPE, page: TypeMeetings },
  { path: routes.CREATEMEETINGTYPE, page: CreateMeetingType },
  { path: routes.ATTEND, page: CorporativeSecretary },
  { path: routes.ATTENDCHAIRMAN, page: CorporativeSecretary },
  { path: routes.ACTIVEMEETINGS + "/:forename/:id/", page: ActiveMeetings },
  {
    path: routes.ACTIVEMEETINGDETAILS + "/:id/",
    page: MeetingMatter,
  },
  { path: routes.ACTIVEMEETINGSCHAIRMAN + "/:forename/:id/", page: ActiveMeetings },
  {
    path: routes.ACTIVEMEETINGDETAILSCHAIRMAN + "/:id/",
    page: MeetingMatter,
  },
  { path: routes.USER, page: "" },
];
