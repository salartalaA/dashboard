import { Sidebar, SidebarSeparator } from "./ui/sidebar";

import AppSideBarHeader from "./AppSideBarHeader";
import AppSideBarContent from "./AppSideBarContent";
import AppSideBarFooter from "./AppSideBarFooter";

const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}

      <AppSideBarHeader />

      {/* SEPARATOR */}

      <SidebarSeparator />

      {/* CONTENT */}

      <AppSideBarContent />

      {/* FOOTER */}

      <AppSideBarFooter />
    </Sidebar>
  );
};

export default AppSideBar;
