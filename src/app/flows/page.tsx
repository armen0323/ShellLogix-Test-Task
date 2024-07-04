import PageLayout from "@/layout/page-layout";
import {FlowsScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Flows',
    description: "description"
}
const Flows = () => {
    return <PageLayout>
        <FlowsScreen/>
    </PageLayout>
}

export default Flows