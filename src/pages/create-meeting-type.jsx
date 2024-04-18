import React from "react";
import { AddMeetType } from "../features/createmeettype";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/keys";
import { API } from "../services/api";
import Spinner from "../consts/Spinner";

function CreateMeetingType() {
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKeys.getUsersKey],
    queryFn: () => API.getUsersById(),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <AddMeetType users={data} />
    </>
  );
}

export default CreateMeetingType;
