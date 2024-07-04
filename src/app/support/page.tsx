import PageLayout from "../../layout/pageLayout";
import {SupportScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Support',
    description: "description"
}
const Support = () => (
    <PageLayout>
        <SupportScreen/>
    </PageLayout>
)

export default Support