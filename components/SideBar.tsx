"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import Box from "./Box"
import SidebarItem from "./SidebarItem"

type SideBarProps = {
    children: React.ReactNode
  }


const SideBar: React.FC<SideBarProps> = ({children}) => {
 const pathName =  usePathname();
 const routes = useMemo(()=> [
  { 
    icon: HiHome, 
    label: 'Home', 
   active: pathName !== '/search',
   href: '/'
   }, {
    icon: BiSearch, 
    label: 'Search',
    active: pathName === '/search',
    href: '/search'
   }
 ], [pathName])

  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
            <Box className="">
             <div className="flex flex-col gap-y-4 px-5 py-4">
                 {routes.map((item)=>(
                    <SidebarItem
                    key={item.label}
                    {...item}
                    />
                 ))}
             </div>
            </Box>
            <Box className="overflow-y-auto h-full">Song Library </Box>
        </div>
    </div>
  )
}

export default SideBar;
