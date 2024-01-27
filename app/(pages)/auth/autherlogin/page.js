import dynamic from "next/dynamic";
import { getAuthSession } from "../../../../lib/auth";

// uploadthing
const UserImgUpDropZone = dynamic(
  () => import("../../../../components/User/UserImgUpDropZone"),
  { ssr: false }
);
import AutherRegistrationForm from "../../../../components/Author/AutherRegistrationForm";

import { BiEdit } from "react-icons/bi";

export const metadata = {
  title: "Settings Page",
  description: "This is Settings page for forTech",
  // other metadata
};

const page = async () => {
  let session = await getAuthSession();
  return <>author registration here</>;
};

export default page;
