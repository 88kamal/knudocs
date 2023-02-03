import Layout from '../components/Layout'
import UserState from '../context/user/userState'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(100)
  const router = useRouter()
  useEffect(() => {
      // routerchange ------------
      router.events.on('routeChangeStart',()=>{
        setProgress(50)
      });
      router.events.on('routeChangeComplete',()=>{
        setProgress(100)
      });
  }, [])
  

    return (
      <UserState>
        <Layout>
          <LoadingBar
            color='#6366F1'
            height={3}
            shadow={true}
            waitingTime={200}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Component {...pageProps} />
        </Layout>
      </UserState>

    )
  }

export default MyApp
