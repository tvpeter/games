// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
/** 
//depreciated code
interface GenreResponse {
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<GenreResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            })
        
        return () => controller.abort();
    }, [])

    return { genres, error, isLoading };
}
*/

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null})

export default useGenres;
