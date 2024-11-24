import TopMoverCard from "@/components/top-mover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TopMoverComponent = ({
  data,
}: {
  data: {
    name: string;
    latestPrice: string;
    day: string;
    icon: string;
  }[];
}) => {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((mover) => (
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
            <TopMoverCard data={mover} key={mover.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TopMoverComponent;
