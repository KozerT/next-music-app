import { FaPlay } from "react-icons/fa"


const PlayButton = () => {
  return (
    <button className=" flex transition p-3 opacity-0 rounded-xl translate-y-1/4 items-center justify-center h- bg-gradient-to-b from-green-600 bg-green-700 drop-shadow-md  group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 ">
      <FaPlay className="text-neutral-200"/>
    </button>
  )
}

export default PlayButton
