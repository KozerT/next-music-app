     'use client'

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

    const AuthModal = () => {
        const supabaseClient = useSupabaseClient();
        const router= useRouter();
        const { session } = useSessionContext();

      return (
        <Modal title='Welcome back'
         description="Login to your account" 
         isOpen onChange={()=> {}}>

         <Auth theme="dark"
          magicLink
          supabaseClient={supabaseClient} 
          providers={['google', 'github']}
          appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: '#293133',
                        brandAccent: '#1ED760'
                    }
                }
            }    
         }}/>
        </Modal>
      )
    }
    
    export default AuthModal
    