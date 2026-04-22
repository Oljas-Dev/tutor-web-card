import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin } from "../authentication/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signin({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);

      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.error("ERROR", err.message);
    },
  });

  return { login, isPending };
}
