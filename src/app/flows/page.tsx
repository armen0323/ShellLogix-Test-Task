import PageLayout from "../../layout/pageLayout";
import {FlowsScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Flows',
    description: "description"
}
const Flows = () => (
    <PageLayout>
        <FlowsScreen/>
    </PageLayout>
)

export default Flows