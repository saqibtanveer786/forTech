import AutherRegistrationForm from "@components/Author/AutherRegistrationForm";
import { getAuthSession } from "../../../lib/auth";
import { getAuthorsData } from "lib/serverAction";

export const metadata = {
  title: "Settings Page",
  description: "This is Settings page for forTech",
  // other metadata
};

const Settings = async () => {
  const session = await getAuthSession();
  const authorsData = await getAuthorsData(session?.user?.id);
  console.log("authors data si: ", authorsData);
  return (
    <AutherRegistrationForm
      userId={session?.user?.id}
      preInfoData={authorsData?.autherProfile}
    />
  );
};

export default Settings;
