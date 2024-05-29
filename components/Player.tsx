'use client'

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer"

const Player = () => {
    const player = usePlayer();
    const {song}=useGetSongById(player.activeId)

    //client component; 
    // load mp3 files. we can do this by reading path
  return (
    <div>
      !
    </div>
  )
}

export default Player
