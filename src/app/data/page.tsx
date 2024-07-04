import PageLayout from "@/layout/page-layout";
import { DataScreen } from "@/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data",
  description: "description",
};
const Data = () => {
  return (
    <PageLayout>
      <DataScreen />
    </PageLayout>
  );
};

export default Data;
