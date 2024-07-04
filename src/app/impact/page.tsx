import PageLayout from "../../layout/pageLayout";
import {ImpactScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Impact',
    description: "description"
}
const Impact = () => (
    <PageLayout>
        <ImpactScreen/>
    </PageLayout>
)
export default Impact