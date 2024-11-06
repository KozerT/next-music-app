"use client"

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useEffect } from "react"
import useAuthModal from "@/hooks/useAuthModal"

const AuthModal = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const { session } = useSessionContext()

  const { isOpen, onClose } = useAuthModal()

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  useEffect(() => {
    if (session) {
      router.refresh()
      onClose()
    }
  }, [session, router, onClose])

  return (
    <Modal
      title="Welcome"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        view="sign_up"
        theme="dark"
        magicLink
        supabaseClient={supabaseClient}
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#293133",
                brandAccent: "#1ED760",
              },
            },
          },
        }}
      />
    </Modal>
  )
}

export default AuthModal
