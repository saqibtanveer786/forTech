import { getAuthersPostData } from "lib/serverAction";

import ECommerce from "../../components/Dashboard/E-commerce";
import PublishAndSettingBtns from "@components/Dashboard/PublishAndSettingBtns";
import { getAuthSession } from "lib/auth";

export const metadata = {
  title: "forTech | Dashboard",
  description: "This is dashboard page for the authors and admins",
};

export default async function Home() {
  const session = await getAuthSession();
  const data = await getAuthersPostData(session?.user?.id);
  return (
    <>
      <PublishAndSettingBtns />
      <ECommerce data={data} session={session} />
    </>
  );
}
