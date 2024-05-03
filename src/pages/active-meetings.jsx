import React from "react";
import { ActiveOrganMeeting } from "../features/active-meetings";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/keys";
import { API } from "../services/api";
import Spinner from "../consts/Spinner";

function ActiveMeetings() {
  const params = useParams();

  const {
    error: firstError,
    data: fadsljkfadsh,
    isLoading: firstLoading,
    refetch: firstRefetch,
  } = useQuery({
    queryKey: [queryKeys.getMeetingsKey],
    queryFn: () => API.getMeetings(),
  });

  const {
    error: secondError,
    data: organForeName,
    isLoading: secondLoading,
    refetch: secondRefetch,
  } = useQuery({
    queryKey: [queryKeys.getMeetingsOrganById],
    queryFn: () => API.getMeetingsOrganById(params.id),
  });
  if (firstLoading) return <Spinner />;
  if (firstError) {
    console.error("An error has occured: " + firstError.message);
    return null;
  }

  return (
    <>
      <ActiveOrganMeeting
        organId={params.id}
        meetings={fadsljkfadsh}
        render={firstRefetch}
        organForeName={organForeName}
      />
    </>
  );
}

export default ActiveMeetings;
