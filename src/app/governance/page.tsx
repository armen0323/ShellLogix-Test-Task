import PageLayout from "@/layout/page-layout";
import { GovernanceScreen } from "@/screens";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Governance",
  description: "description",
};
const Governance = () => {
  return (
    <PageLayout>
      <GovernanceScreen />
    </PageLayout>
  );
};

export default Governance;
