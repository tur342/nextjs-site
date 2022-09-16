import Layout from "../components/layout";
import Head from "next/head";
import Animation from "../components/project/ready-animation";

export default function Projects(){
    return(
        <Layout>
            <Head>
                <title>PARK SEYEONG NEXTJS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <h1 className="py-5">
                    サイト非公開中＝＝＝準備中
                </h1>
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                
                <div >
                    <Animation/>
                </div>
            </div>
        </section>
            
        </Layout>
    );
}