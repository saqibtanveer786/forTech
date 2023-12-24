import { getAuthersPostData } from "lib/serverAction";

import ECommerce from "../../components/Dashboard/E-commerce";

export const metadata = {
    title: "forTech | Dashboard",
    description: "This is dashboard page for the authors and admins"
};


export default async function Home() {
    const data = await getAuthersPostData()
    return (
        <>
            <ECommerce data={data} />
        </>
    );
}
