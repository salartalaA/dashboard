import Image from "next/image";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";

const AppSideBarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/">
              <Image
                src="https://github.com/salartalaa.png"
                alt="logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span>Salina</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default AppSideBarHeader;
