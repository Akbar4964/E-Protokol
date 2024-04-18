import React, { useState } from "react";
import { Participation } from "../features/secretarycorporative";
import Spinner from "../consts/Spinner";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/keys";
import { API } from "../services/api";

function CorporativeSecretary() {
  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.getMeetingsOrgan],
    queryFn: () => API.getMeetingsOrgan(),
  });

  // console.log(params);
  if (isLoading) return <Spinner />;
  if (error) return "An error has occured: " + error.message;
  return (
    <>
      <Participation meetingsOrgans={data} render={refetch} />
    </>
  );
}

export default CorporativeSecretary;
