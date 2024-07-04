import PageLayout from "../../layout/pageLayout";
import {DataScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Data",
    description: "description",
};
const Data = () => (
    <PageLayout>
        <DataScreen/>
    </PageLayout>
);


export default Data;
