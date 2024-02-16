import { useQuery } from "@tanstack/react-query";
import { getToDosIds } from "./api";

export function useToDoIds(something: boolean) {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getToDosIds,
        // refetchOnWindowFocus: false
    })
}