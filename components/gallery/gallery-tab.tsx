import NextImage from 'next/image';
import { cn } from '@/lib/utils';
import { Image } from '@/types';

import { TabsTrigger } from '../ui/tabs';

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <TabsTrigger
      value={image.id}
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
    >
      <div>
        <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
          <NextImage
            fill
            src={image.url}
            alt=""
            className="object-cover object-center"
          />
        </span>
        <span
          className={cn('absolute inset-0 rounded-md ring-2 ring-offset-2')}
        />
      </div>
    </TabsTrigger>
  );
};

export default GalleryTab;
