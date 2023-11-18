import { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
    }
}, [gameQuery]);

export default useGames;
