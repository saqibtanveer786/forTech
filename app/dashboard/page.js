import ECommerce from "../../components/Dashboard/E-commerce";

export const metadata = {
    title: "forTech | Dashboard",
    description: "This is dashboard page for the authors and admins",
    viewport: {
        width: "device-width",
        height: "device-height",
        initialScale: 1,
        maximumScale: 1,
        minimumScale: 1,
    },
};

export default function Home() {
    return (
        <>
            <ECommerce />
        </>
    );
}
