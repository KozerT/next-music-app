'use client'

import {Database} from '@/types_db'; 
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

type SupabaseProviderProps = {
     children: React.ReactNode;
}


const SupabaseProvider: React.FC<SupabaseProviderProps> = ({children}) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Missing Supabase environment variables.');
    }

  const [supabaseClient] = useState(()=> 
    createClientComponentClient<Database>({ supabaseUrl, supabaseKey }));

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider
