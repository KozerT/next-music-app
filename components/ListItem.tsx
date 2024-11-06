"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPlay } from "react-icons/fa"

type ListItem = {
  image: string
  name: string
  href: string
}

const ListItem: React.FC<ListItem> = ({
  image,
  name,
  href,
}) => {
  const router = useRouter()

  const onCLick = () => {
    router.push(href)
  }
  return (
    <button
      className=" relative group flex items-center rounded-xl overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      onClick={onCLick}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className=" object-cover "
          fill
          src={image}
          alt="hart"
          sizes="30vw, (max-width: 64px) 64px"
        />
      </div>
      <p className=" text-neutral-200 font-medium truncate py-4 ">
        {name}
      </p>
      <div className="absolute flex transition p-3 opacity-0 rounded-xl items-center justify-center bg-transparent drop-shadow-md border-2 right-5 group-hover:opacity-100 hover:scale-110 ">
        <FaPlay className="text-neutral-200" />
      </div>
    </button>
  )
}

export default ListItem
