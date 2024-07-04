import PageLayout from "@/layout/page-layout";
import { TasksScreen } from "@/screens";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tasks",
  description: "description",
};
const Tasks = () => {
  return (
    <PageLayout>
      <TasksScreen />
    </PageLayout>
  );
};

export default Tasks;
