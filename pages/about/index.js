import Head from "next/head"
import Header from "../components/Header"
import Content from "../components/Content"
export default function About(){

  
  return (
    <Content>
      <Head>
        <title>About</title>
        <meta name="description" content="About page description" />
      </Head>
      <Header title="About Page"/>
      <h1>About</h1>
      <p>next</p>
    </Content>
  )
}