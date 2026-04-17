import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookLesson as apiBookLesson } from "../CRUD/apiUpdateLesson";
import toast from "react-hot-toast";

export function useBookLesson() {
  const queryClient = useQueryClient();

  const { mutate: bookLesson, isPending: isBooking } = useMutation({
    mutationFn: ({ value, lessonId }: { value: string; lessonId: string }) =>
      apiBookLesson({ value, lessonId }),
    mutationKey: ["slots"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slots"] });
      toast.success(
        "Lesson was successfuly booked. Check your email with confirmation!",
      );
    },
  });

  return { bookLesson, isBooking };
}
