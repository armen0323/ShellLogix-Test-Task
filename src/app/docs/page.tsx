import PageLayout from "../../layout/pageLayout";
import {DocsScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Docs",
    description: "description",
};

const Docs = () => (
    <PageLayout>
        <DocsScreen/>
    </PageLayout>
)


export default Docs;
