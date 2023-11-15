import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return <Card>
        <Skeleton width='300px' height='200px' borderRadius={10} overflow='hidden'></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
  </Card>
}

export default GameCardSkeleton
