'use client'

import { Song } from "@/types"

type SongItemProps = {
    data: Song;
    onCLick: (id: string) => void
}


const SongItem: React.FC<SongItemProps> = ({
    data, onCLick
}) => {
  return (
    <div>
      Song Item
    </div>
  )
}

export default SongItem
