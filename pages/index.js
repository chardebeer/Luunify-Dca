// our-domain.com
import { useEffect } from 'react'
import {useRouter} from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function HomePage(){
    const router = useRouter();
    
    const { user, loading } = useUser()
     useEffect(() => {
       if (!(user || loading)) {
         // router.push('/signin')
          router.replace("/signin")
         }
       }, [user, loading])
    
    // const userLoggedin=true;
    // if(userLoggedin){
    // router.replace("/signupform")}
    return(
    <p>Redirecting...</p>
     )
}
