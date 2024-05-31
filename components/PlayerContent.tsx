'use client'

import { Song } from "@/types"
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { ImVolumeIncrease } from "react-icons/im";
import { BiVolume } from "react-icons/bi";
import { IoVolumeHighOutline } from "react-icons/io5";
import Slider from "./Slider";

type PlayerContentProps = {
     song: Song;
     songUrl: string;

}

const PlayerContent: React.FC <PlayerContentProps> = ({
    song, songUrl
}) => {
    const Icon = true ? BsPauseFill : BsPlayFill;
  return (

    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
     <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
   <MediaItem data={song}/>
   <LikeButton songId={song.id}/>
        </div>
     </div>

     <div className="flex md:hidden col-auto w-full justify-end items-center ">
        <div onClick={()=> {
        }} className="h-10 w w-10 items-center justify-center rounded-full bg-white p-1 cursor-pointer ">
        <Icon size={30} className="text-black"/>
        </div>
     </div>
     <div className="hidden h-full md:flex justify-center items-center w-full max-w-[772px] gap-x-6">
      <AiFillStepBackward size={30} className="text-white transition text-neutral-400 cursor-pointer hover: text-white"/>
      <div onClick={()=> {}}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white p-1 cursor-pointer"
      >
        <Icon size={30} className="text-black"/>
      </div>
      <AiFillStepForward
      onClick={()=> {  }}
      size={30}
      className="text-neutral-400 cursor-pointer hover:text-white transition"
      />
     </div>

     <div className="hidden w-full md:flex w-full grid-cols-2  md:grid-cols-3 h-full ">
        <div className="flex items-center gap-x-4 w-[120px]">
          <IoVolumeHighOutline onClick={()=>{}} className="cursor-pointer"/>
          <Slider/>
        </div>      
     </div>
    </div>
  )
}

export default PlayerContent
