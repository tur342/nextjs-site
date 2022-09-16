import Animation from "./animation";
import Link from "next/link";
export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                朴世栄です
                <br/>
                <br className="hidden lg:inline-block"/>
                박세영입니다
                <br />
                PARK SEYEONG
                </h1>
                <p className="mb-8 leading-relaxed">
                このサイトはnext.jsで作成されております。<br/>
                이 사이트는 Next.js으로 작성되어있습니다.<br/>
                This site is written in Next.js.<br/><br/>
                technology stack : Next.js , tailwind
                </p>
                <div className="flex justify-center">
                <Link href='project'>
                    <a className="btn-project">準備中のサイト</a>
                </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
        
    );
}