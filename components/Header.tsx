"use client"
import { useRouter } from "next/navigation";
import { ReactNode } from "react"
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

type HeaderProps = {
    children: React.ReactNode;
    className?: string
}

const Header: React.FC<HeaderProps> = ({children,className }) => {
    const router = useRouter();
    const handleLogOut = () => {
        //handle functionality
    }
  return (
    <>
    <header className={twMerge(`h-fit bg-gradient-to-b from-emerald-900 p-6`, className)}>
     <div className=" w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
            <button className="bg-black rounded-full flex items-center hover:opacity-75 transition " onClick={()=> router.back()}>
                <RxCaretLeft size={35} className=" text-wite"/>
            </button>
            <button className="bg-black rounded-full flex items-center hover:opacity-75 transition">
                <RxCaretRight size={35} className=" text-wite"
                onClick={()=> router.forward()}
                />
            </button>
        </div>
        <div className="flex  md:hidden gap-x-2 items-center">
           <button className="rounded-full p-2 bg-slate-50 flex items-center justify-center hover:opacity-80 transition">
            <HiHome className="text-black" size={20}/>
             </button>
             <button className="rounded-full p-2 bg-slate-50 flex items-center justify-center hover:opacity-80 transition">
            <BiSearch className="text-black" size={20}/>
             </button>
        </div>
        <div className="
        flex justify-between items-center gap-x-4">
            <>
            <div>
                <Button className=" bg-transparent text-neutral-300 font-normal ">
                    Sign Up
                </Button>
            </div>
            <div>
                <Button className="px-4 bg-slate-50  ">
                    Login
                </Button>
            </div>
            </>

        </div>
     </div>
    </header>
    </>
  )
}

export default Header
