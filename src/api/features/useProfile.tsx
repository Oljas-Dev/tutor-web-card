import { useQuery } from "@tanstack/react-query";
import getProfile from "../CRUD/apiProfile";

export default function useProfile() {
  const { data: profile, isPending } = useQuery({
    queryFn: getProfile,
    queryKey: ["profiles"],
  });
  return { profile, isPending };
}
