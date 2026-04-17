import { useQuery } from "@tanstack/react-query";
import getSlots from "../CRUD/apiGetLessons";

export function useLessons() {
  const { data: lessons, isPending } = useQuery({
    queryKey: ["slots"],
    queryFn: getSlots,
  });
  return { lessons, isPending };
}
