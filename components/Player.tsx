'use client'

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const {song}=useGetSongById(player.activeId);
    const songUrl = useLoadSongUrl(song!);
    //client component; 
    // load mp3 files. we can do this by reading path

    if(!song || !songUrl || !player.activeId){
        return null;
    }

   

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent
      key={songUrl} // the player component destroyed before loading the new song; this needed to reset a hook;
      song={song}
      songUrl={songUrl}
       />
    </div>
  )
}

export default Player
