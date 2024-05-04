import {  useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { QUERY_KEYS } from "../const/query-keys.const";
import { toast } from "react-toastify";

interface IParams<TR, TD> {
  mutationKey: Array<keyof typeof QUERY_KEYS | string>
  mutationFn:  (data:Array<TD>) => Promise<AxiosResponse<TR, TD>>
  onSuccess?: (data:TR) => void
  onError?: () => void
}

export const useEnhancedMutation = <TR, TD>({
  mutationKey,
  mutationFn,
  onSuccess,
  onError,
}:IParams<TR,TD>) => {
  const mutation = useMutation<
    AxiosResponse<TR>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AxiosError<any>,
    Array<TD>
  >({
    mutationFn,
    mutationKey: mutationKey,
    onSuccess: ({data}) :void => {
      onSuccess?.(data);
    },
    onError: (e) => {
      onError?.()
      toast.error(e.response?.data?.message || 'Something wrong!')
      throw e
    },
  });

  return mutation
}