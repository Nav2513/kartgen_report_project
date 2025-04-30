
import HeroPage from "./organism/hero";
import Intro from "./organism/intro";
import TableOfContent from "./organism/tableOfContent";
import Header from "./templates/header";

export default function Home() {


    return(
        <>
                <Header />
                <HeroPage />
                <TableOfContent />
                <Intro />
        </>
    )
}