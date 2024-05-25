'use client'

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types"
import Image from "next/image";
import PlayButton from "./PlayButton";

type SongItemProps = {
    data: Song;
    onClick: (id: string) => void
}


const SongItem: React.FC<SongItemProps> = ({
    data, onClick
}) => {
    const imagePath = useLoadImage(data);

  return (
    <div onClick={() => onClick(data.id)}
    className="group relative flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 p-1 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition "
    >
      <div className="w-full h-full rounded-md relative aspect-square overflow-hidden">
        <Image 
        className="object-cover"
        src={imagePath || '/images/like.png'}
        fill
        alt="Image"
        />
      </div>
      <div className="flex flex-col w-full items-start pt-4 gap-y-2">
        <p className="truncate font-semibold w-full">
            {data.title}
        </p>
        <p className='text-sm pb-4 truncate w-full text-neutral-200'>
            By {data.author}
        </p>
      </div>
      <div className="absolute  right-3 bottom-[94px]">
       <PlayButton/>
      </div>
    </div>
  )
}

export default SongItem
