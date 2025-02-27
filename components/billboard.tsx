'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Billboard as TBillboard } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface BillboardProps {
  data: TBillboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
              <div
                style={{ backgroundImage: `url(${item?.imageUrl})` }}
                className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
                  <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
                    {item?.label}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Billboard;
