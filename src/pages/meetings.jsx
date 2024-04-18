import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Assembly } from "../features/meetings";
import { API } from "../services/api";
import { queryKeys } from "../query/keys";
import Spinner from "../consts/Spinner";

function Meeting() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsKey],
    queryFn: () => API.getMeetings(),
  });

  if (isLoading) return <Spinner />;

  if (error) return console.log(error.message);

  return (
    <>
      <Assembly meetings={data} refetch={refetch} />
    </>
  );
}

export default Meeting;
