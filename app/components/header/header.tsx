import React from "react";
import UserMenu from "../../client-components/userMenu/userMenu";
import NotificationMenu from "../../client-components/notificationMenu/notificationMenu";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  return (
    <header className="w-full bg-primary py-2">
      <div className="flex justify-between items-center container max-w-screen-xl mx-auto">
        <h1 className="text-2xl text-white font-semibold">Eventer</h1>
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <NotificationMenu />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
