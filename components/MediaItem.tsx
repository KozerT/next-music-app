'use client'
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";


type MediaItemProps= {
    data: Song;
    onClick?: (id: string)=> void
}
const MediaItem: React.FC<MediaItemProps> = ({data, onClick}) => {
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
     if(onClick){
        return onClick(data.id)
     }
    }

  return (
    <div onClick={handleClick}
    className="flex items-center gap-x-3 cursor-pointer p-2 w-full rounded-md hover:bg-neutral-800/50"
    >
      < div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image fill 
        src={imageUrl || '/images/like.png'} 
        alt='Media Item'
        className="object-cover"
        />
      </div>
      <div className=" flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-neutral-50">{data.title}</p>
        <p className="truncate text-neutral-300 text-sm">{data.author}</p>
      </div>
    </div>
  )
}

export default MediaItem
