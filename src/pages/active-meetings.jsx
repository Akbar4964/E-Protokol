import React from "react";
import { ActiveOrganMeeting } from "../features/active-meetings";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/keys";
import { API } from "../services/api";
import Spinner from "../consts/Spinner";

function ActiveMeetings() {
  const params = useParams();

  const { error, data:fadsljkfadsh, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsKey],
    queryFn: () => API.getMeetings(),
  });

  console.log(params);
  if (isLoading) return <Spinner />;
  if (error){
    console.error("An error has occured: " + error.message)
    return null
  }

  return (
    <>
      <ActiveOrganMeeting
        organId={params.id}
        organForeName={params.forename}
        meetings={fadsljkfadsh}
        render={refetch}
      />
    </>
  );
}

export default ActiveMeetings;
