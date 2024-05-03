import { routes } from "../consts/routes";
import Secretary from "../pages/secretary";
import ActiveMeetings from "../pages/active-meetings";
import CreateMeeting from "../pages/create-meeting";
import CreateMeetingType from "../pages/create-meeting-type";
import CreateUser from "../pages/create-user";
import EditMeeting from "../pages/edit-meeting";
import Meeting from "../pages/meetings";
import TypeMeetings from "../pages/meetings-type";
import CorporativeSecretary from "../pages/secretary-corporative";
import Home from "../pages/home";
import Users from "../pages/users";
import ActiveMeetingsDetails from "../pages/active-meetings-details";

export const publicRoutes = [{ path: routes.HOME, page: Home }];

export const privateRoutes = [
  { path: routes.ADMIN, page: Secretary },
  { path: routes.MEETING, page: Meeting },
  { path: routes.CREATEMEETING, page: CreateMeeting },
  { path: routes.EDITMEETING + "/:id/", page: EditMeeting },
  { path: routes.USERS, page: Users },
  { path: routes.CREATEUSER, page: CreateUser },
  { path: routes.MEETINGTYPE, page: TypeMeetings },
  { path: routes.CREATE_MEETINGTYPE, page: CreateMeetingType },
  { path: routes.ATTEND, page: CorporativeSecretary },
  { path: routes.ACTIVE_MEETINGS + "/:id/", page: ActiveMeetings },
  { path: routes.ATTEND_USER, page: CorporativeSecretary },
  { path: routes.USER_ACTIVE_MEETINGS + "/:id/", page: ActiveMeetings },
  {
    path: routes.ACTIVE_MEETING_DETAILS + "/:id/",
    page: ActiveMeetingsDetails,
  },
  {
    path: routes.USER_ACTIVE_MEETING_DETAILS + "/:id/",
    page: ActiveMeetingsDetails,
  },
  { path: routes.USER, page: "" },
];
