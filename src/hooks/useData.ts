import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface Response<T> {
    count: number;
    results: T[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            })
        
        return () => controller.abort();
    }, deps? [...deps] : [])

    return { data, error, isLoading };
}

export default useData;
