import { getAuthersPostData } from "lib/serverAction";

import ECommerce from "../../components/Dashboard/E-commerce";
import PublishAndSettingBtns from "@components/Dashboard/PublishAndSettingBtns";

export const metadata = {
    title: "forTech | Dashboard",
    description: "This is dashboard page for the authors and admins"
};


export default async function Home() {
    const data = await getAuthersPostData('clo11vi7j0000uvj8ihnho7yi')
    return (
        <>
            <PublishAndSettingBtns />
            <ECommerce data={data} />
        </>
    );
}
