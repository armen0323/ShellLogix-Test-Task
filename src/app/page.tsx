import PageLayout from "@/layout/page-layout";
import {SurveysScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Surveys',
    description: "description"
}
const Home = () => {
    return (
        <PageLayout>
            <SurveysScreen/>
        </PageLayout>
    )
}

export default Home