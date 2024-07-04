import PageLayout from "../../layout/pageLayout";
import {ReportingScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Reporting',
    description: "description"
}
const Reporting = () => (
    <PageLayout>
        <ReportingScreen/>
    </PageLayout>
)

export default Reporting