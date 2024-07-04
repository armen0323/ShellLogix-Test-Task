import PageLayout from "../../layout/pageLayout";
import {LearnScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Learn',
    description: "description"
}
const Learn = () => (
    <PageLayout>
        <LearnScreen/>
    </PageLayout>
)

export default Learn