import PageLayout from "../../layout/pageLayout";
import {TasksScreen} from "@/screens";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Tasks",
    description: "description",
};
const Tasks = () => (
    <PageLayout>
        <TasksScreen/>
    </PageLayout>
)


export default Tasks;
