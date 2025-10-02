import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Plus,
  Projector,
  ChevronRight,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { MenuItemsT } from "@/types";

const MenuItems: MenuItemsT[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    id: 3,
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSideBarContent = () => {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {MenuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.title === "Inbox" && (
                  <SidebarMenuBadge>24</SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarGroupAction>
          <Plus /> <span className="sr-only">Add Project</span>
        </SidebarGroupAction>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"#"}>
                  <Projector />
                  See All Projects
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"#"}>
                  <Plus />
                  Add Project
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* COLLAPSIBLE */}

      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Collapsible Group
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>

          {/* COLLAPSIBLE CONTENT */}

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={"#"}>
                      <Projector />
                      See All Projects
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={"#"}>
                      <Plus />
                      Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* NESTED */}

      <SidebarGroup>
        <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"#"}>
                  <Projector />
                  See All Projects
                </Link>
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Plus />
                      Add Project
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Plus />
                      Add Category
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default AppSideBarContent;
