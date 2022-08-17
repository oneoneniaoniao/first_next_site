import Head from "next/head"
import Link from "next/link"
import useSWR from "swr"
import Header from "./components/Header"
import Content from "./components/Content"

export default function Home(){
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error} = useSWR('/api/message', fetcher)
  if(error) return <div>failed to load message</div>
  if(!data) return <div>loading...</div>
return (
  <Content>
    <Head>
      <title>My page title</title>
      <meta name="description" content="My page description" />
    </Head>
    <Header title={`Top Page`}/>
  <p> {data.message}</p>
  <div>
    <Link href="/about"><a>About</a></Link>
  </div>
  <style jsx>{`
    h1{
      color: white;
      background-color: lightblue;
    }`}</style>
  </Content>
)
}