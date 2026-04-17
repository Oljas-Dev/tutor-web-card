import { useMutation, useQueryClient } from "@tanstack/react-query";
import insertSlots from "../CRUD/insertSlots";

export default function useInsertlots() {
  const queryClient = useQueryClient();

  const { mutate: insert, isPending: isInserting } = useMutation({
    mutationFn: insertSlots,
    onSuccess: () => {
      console.log("Slots were successfully updated");
      queryClient.invalidateQueries({ queryKey: ["slots"] });
    },
    onError: (err) => alert(err.message),
  });
  return { insert, isInserting };
}
