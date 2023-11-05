import Image from "next/image";
import dynamic from "next/dynamic";
import { getAuthSession } from '../../../../lib/auth'

// uploadthing 
const UserImgUpDropZone = dynamic(() => import('../../../../components/UserImgUpDropZone'), { ssr: false })
import AutherRegistrationForm from '../../../../components/AutherRegistrationForm'

import { BiEdit } from 'react-icons/bi'

export const metadata = {
    title: "Settings Page",
    description: "This is Settings page for forTech",
    // other metadata
};

const page = async () => {
    const session = await getAuthSession()
    return (
        <>
            <AutherRegistrationForm userId={session.user?.id} />
        </>
    );
};

export default page;
