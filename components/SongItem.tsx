'use client'

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types"
import Image from "next/image";

type SongItemProps = {
    data: Song;
    onCLick: (id: string) => void
}


const SongItem: React.FC<SongItemProps> = ({
    data, onCLick
}) => {
    const imagePath = useLoadImage(data);

  return (
    <div onClick={() => onCLick(data.id)}
    className="group relative flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 p-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition "
    >
      < div className="w-full h-full  rounded-md relative aspect-square overflow-hidden">
        <Image 
        className="object-cover"
        src={imagePath || '/images/like.png'}
        fill
        alt="Image"
        />
      </div>
    </div>
  )
}

export default SongItem
