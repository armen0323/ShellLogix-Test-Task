import PageLayout from "@/layout/page-layout";
import {ImpactScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Impact',
    description: "description"
}
const Impact = () => {
    return <PageLayout>
        <ImpactScreen/>
    </PageLayout>
}

export default Impact