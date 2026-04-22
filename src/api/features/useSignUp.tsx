import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../authentication/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onError: (err) => {
      console.error(err.message);
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success(
        "Success! Confirmation email was sent. Please check your email to proceed.",
      );
    },
  });

  return { signup, isPending };
}
