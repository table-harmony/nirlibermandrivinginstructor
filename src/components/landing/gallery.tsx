import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Gallery() {
  return (
    <section
      id="gallery"
      className="container flex justify-center py-12 sm:py-20"
      dir="ltr"
    >
      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <img
                className="h-72 w-56 select-none rounded-md object-cover transition-all hover:scale-105"
                alt={`gallery image number ${index}`}
                src={`/gallery/image${index}.webp`}
                width={224}
                height={288}
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  )
}
