import { Subscription, UserDetails } from '@/types';
import { User } from '@supabase/auth-helpers-nextjs';
import { useSessionContext, useUser as  useSupabaseUser } from '@supabase/auth-helpers-react';
import React, { createContext, useContext, useEffect, useState } from 'react'

type UserContextType = {
    accessToken: string | null; 
    user: User | null; 
    userDetails: UserDetails | null; 
    subscription: Subscription | null; 
    isLoading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export type Props = {
    [propName: string] : any;
}

export const MyUserContextProvider = (props: Props) => {
    const {session, isLoading:isLoadingUser, supabaseClient: supabase } = useSessionContext();
    const user = useSupabaseUser();
    const accessToken = session?.access_token ?? null;

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails , setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const getUserDetails = async () => {
        const { data, error } = await supabase.from('users').select('*').single();
        if (error) throw error;
        return data;
      };
    
    
 const getSubscription = async () => {
        const { data, error } = await supabase.from('subscriptions')
          .select('*, prices(*, products(*))')
          .in('status', ['trialing', 'active'])
          .single();
        if (error) throw error;
        return data;
      };

      useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
          setIsLoadingData(true);
    
          (async () => {
            try {
              const [userDetailsData, subscriptionData] = await Promise.all([
                getUserDetails(),
                getSubscription(),
              ]);
    
              setUserDetails(userDetailsData);
              setSubscription(subscriptionData);
            } catch (error) {
              console.error('Error fetching user data:', error);
            } finally {
              setIsLoadingData(false);
            }
          })();
        } else if (!user && !isLoadingData && !isLoadingUser) {
          setUserDetails(null);
          setSubscription(null);
        }
      }, [user, isLoadingUser]);

    const value = {
        accessToken, 
        user,
        userDetails,
        isLoading: isLoadingData || isLoadingUser,
        subscription
    };

    return <UserContext.Provider  value={value} {...props}/>
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used with the MyUserContextProvider');
      }
  return context;
}


