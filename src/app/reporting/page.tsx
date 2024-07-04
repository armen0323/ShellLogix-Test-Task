import PageLayout from "@/layout/page-layout";
import {ReportingScreen} from "@/screens";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Reporting',
    description: "description"
}
const Reporting = () => {
    return <PageLayout>
        <ReportingScreen/>
    </PageLayout>
}

export default Reporting