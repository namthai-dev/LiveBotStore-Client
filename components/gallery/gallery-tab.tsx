import Image from 'next/image';
import { Image as TImage } from '@/types';

import { TabsTrigger } from '../ui/tabs';

interface GalleryTabProps {
  image: TImage;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <TabsTrigger
      value={image.id}
      className="flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
    >
      <div className="inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
        <Image
          width={300}
          height={300}
          src={image.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
    </TabsTrigger>
  );
};

export default GalleryTab;
