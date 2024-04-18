import React from "react";
import { API } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { MeetingType } from "../features/meetingtype";
import { queryKeys } from "../query/keys";
import Spinner from "../consts/Spinner";

function TypeMeetings() {
  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsOrgan],
    queryFn: () => API.getMeetingsOrgan(),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <MeetingType meetingsOrgan={data} refetch={refetch} />
    </>
  );
}

export default TypeMeetings;
