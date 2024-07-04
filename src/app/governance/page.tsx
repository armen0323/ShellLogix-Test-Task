import PageLayout from "../../layout/pageLayout";
import {GovernanceScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Governance",
    description: "description",
};
const Governance = () => (
    <PageLayout>
        <GovernanceScreen/>
    </PageLayout>
);


export default Governance;
