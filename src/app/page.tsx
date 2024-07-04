import PageLayout from "../layout/pageLayout";
import {SurveysScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Surveys',
    description: "description"
}
const Home = () => (
    <PageLayout>
        <SurveysScreen/>
    </PageLayout>
)


export default Home