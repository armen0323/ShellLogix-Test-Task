import PageLayout from "../../layout/pageLayout";
import {ConfigurationScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Configuration',
    description: "description"
}

const Configuration = () => (
    <PageLayout>
        <ConfigurationScreen/>
    </PageLayout>
)

export default Configuration