import { OrganizationList, UserButton } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
      <div className="absolute top-5 right-5">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
