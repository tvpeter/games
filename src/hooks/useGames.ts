import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  
  /**
  interface GamesResponse {
    count: number
    results: Game[]
  }

const useGames = () => {

    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<GamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results)
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            })
        
        return () => controller.abort();
    }, [])

    return { games, error, isLoading };
}
*/

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {
    params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
    }
}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;
