import PageLayout from "@/layout/page-layout";
import {LearnScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Learn',
    description: "description"
}
const Learn = () => {
    return <PageLayout>
        <LearnScreen/>
    </PageLayout>
}

export default Learn