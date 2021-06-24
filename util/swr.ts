import useSWR from "swr"


export const useUser = (id: string) => {
    const fetcher = () => fetch(`/api/user/${id}`).then(r => r.json())
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)
    return {
        devices: data,
        isLoading: !error && !data,
        isError: error
    }
}