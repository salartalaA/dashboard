import { User2, ChevronUp } from "lucide-react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { FooterItemsT } from "@/types";

const FooterItems: FooterItemsT[] = [
  {
    id: 1,
    label: "Account",
  },
  {
    id: 2,
    label: "Setting",
  },
  {
    id: 3,
    label: "Signout",
  },
];

const AppSideBarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> John Doe <ChevronUp />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {FooterItems.map((item) => (
                <DropdownMenuItem key={item.id}>{item.label}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSideBarFooter;
