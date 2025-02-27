'use client';
import NextImage from 'next/image';
import { Image } from '@/types';

import { Tabs, TabsList, TabsContent } from '../ui/tabs';
import GalleryTab from './gallery-tab';

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tabs className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabsList className="grid grid-cols-4 gap-6">
          {images.map(image => (
            <GalleryTab image={image} key={image.id} />
          ))}
        </TabsList>
      </div>
      <div className="aspect-square w-full">
        {images.map(image => (
          <TabsContent
            value={image.id}
            key={image.id}
            className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg"
          >
            <NextImage
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default Gallery;
