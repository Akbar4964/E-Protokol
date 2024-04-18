import React from "react";
import { UsersInfo } from "../features/users";
import { API } from "../services/api";
import { queryKeys } from "../query/keys";
import { useQuery } from "@tanstack/react-query";

function Users() {
  const { error, data, isLoading, refetch } = useQuery({
    queryKey: [queryKeys.usersKey],
    queryFn: () => API.getUsers(),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  return (
    <>
      <UsersInfo data={data} refetch={refetch} />
    </>
  );
}

export default Users;
