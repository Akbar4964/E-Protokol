import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Create } from "../features/createmeeting";
import { API } from "../services/api";
import { queryKeys } from "../query/keys";
import Spinner from "../consts/Spinner";

function CreateMeeting() {
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKeys.offers],
    queryFn: () => API.getMeetingsOrgan(),
  });
  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <Create meetingsOrgan={data} />
    </>
  );
}

export default CreateMeeting;
