"use client";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";


type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const { onOpen } = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //TODO : reset songs
    router.refresh();

    //TODO: tost
    if (error) {
       toast.error(error.message)
    }else{
        toast.success('Logged out!')
    }
  };
  return (
    <>
      <header
        className={twMerge(
          `h-fit bg-gradient-to-b from-emerald-900 p-6`,
          className
        )}
      >
        <div className=" w-full mb-4 flex items-center justify-between">
          <div className="hidden md:flex gap-x-2 items-center">
            <button
              className="bg-black rounded-full flex items-center hover:opacity-75 transition "
              onClick={() => router.back()}
            >
              <RxCaretLeft
                size={35}
                className=" text-wite"
              />
            </button>
            <button className="bg-black rounded-full flex items-center hover:opacity-75 transition">
              <RxCaretRight
                size={35}
                className=" text-wite"
                onClick={() => router.forward()}
              />
            </button>
          </div>
          <div className="flex  md:hidden gap-x-2 items-center">
            <button className="rounded-full p-2 bg-slate-50 flex items-center justify-center hover:opacity-80 transition">
              <HiHome className="text-black" size={20} />
            </button>
            <button className="rounded-full p-2 bg-slate-50 flex items-center justify-center hover:opacity-80 transition">
              <BiSearch className="text-black" size={20} />
            </button>
          </div>
          <div
            className="
        flex justify-between items-center gap-x-4"
          >
            {user ? (
              <div className="flex  items-center gap-x-4 ">
                <Button onClick={handleLogOut}  className= "bg-neutral-200 px-4 py-2 ">Logout</Button>
                 <Button onClick={()=> router.push('/account')}
                 className="bg-neutral-200 py-2 text-lg text-stone-900">
                    <FaUserAlt/>
                 </Button>
                 </div>
            ) : (
              <>
                <div>
                  <Button
                    onClick={onOpen}
                    className="bg-transparent text-neutral-300 font-normal"
                  >
                    Sign Up
                  </Button>
                </div>
                <div>
                  <Button
                    className="px-4 bg-slate-50 opacity-65"
                    onClick={onOpen}
                  >
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {children}
      </header>
    </>
  );
};

export default Header;
