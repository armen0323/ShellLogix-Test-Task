import PageLayout from "@/layout/page-layout";
import {SupportScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Support',
    description: "description"
}
const Support = () => {
    return <PageLayout>
        <SupportScreen/>
    </PageLayout>
}

export default Support