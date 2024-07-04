import PageLayout from "@/layout/page-layout";
import { DocsScreen } from "@/screens";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Docs",
  description: "description",
};

const Docs = () => {
  return (
    <PageLayout>
      <DocsScreen />
    </PageLayout>
  );
};

export default Docs;
