import React from "react";
import { useParams } from "react-router-dom";

import EditedMeeting from "../features/editmeeting/components/EditedMeeting/EditedMeeting";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/keys";
import { API } from "../services/api";
import Spinner from "../consts/Spinner";

function EditMeeting() {
  const params = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: [queryKeys.offers],
    queryFn: () => API.getMeetingsOrgan(),
  });
  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <EditedMeeting id={params.id} meetingOrgan={data} />
    </>
  );
}

export default EditMeeting;
