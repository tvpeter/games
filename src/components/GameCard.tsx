import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"

import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"

interface GameProps {
  game: Game
}
const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
