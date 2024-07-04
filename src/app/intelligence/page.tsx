import PageLayout from "@/layout/page-layout";
import {IntelligenceScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Intelligence',
    description: "description"
}
const Intelligence = () => {
    return <PageLayout>
        <IntelligenceScreen/>
    </PageLayout>
}

export default Intelligence