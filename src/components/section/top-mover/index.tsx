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
        {data.map((mover, index) => (
          <CarouselItem
            className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            key={mover.name + index}
          >
            <TopMoverCard data={mover} key={mover.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TopMoverComponent;
