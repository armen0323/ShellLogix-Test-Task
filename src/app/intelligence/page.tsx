import PageLayout from "../../layout/pageLayout";
import {IntelligenceScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Intelligence',
    description: "description"
}
const Intelligence = () => (
    <PageLayout>
        <IntelligenceScreen/>
    </PageLayout>
)

export default Intelligence