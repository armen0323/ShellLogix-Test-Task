import PageLayout from "@/layout/page-layout";
import {ConfigurationScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Configuration',
    description: "description"
}

const Configuration = () => {
    return <PageLayout>
        <ConfigurationScreen/>
    </PageLayout>
}

export default Configuration