import DownloadsIcon from "../Svg/DownloadsIcon";
import FriendsIcon from "../Svg/FriendsIcon";
import HomeIcon from "../Svg/HomeIcon";
import LibraryIcon from "../Svg/LibraryIcon";
import LiveIcon from "../Svg/LiveIcon";
import SettingsIcon from "../Svg/SettingsIcon";
import StoreIcon from "../Svg/StoreIcon";
// Svg

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Store",
    path: "/store",
    icon: <StoreIcon />,
  },
  {
    id: 3,
    name: "Library",
    path: "/library",
    icon: <LibraryIcon />,
  },
  {
    id: 4,
    name: "Friends",
    path: "/friends",
    icon: <FriendsIcon />,
  },
  {
    id: 5,
    name: "Live",
    path: "/live",
    icon: <LiveIcon />,
  },
];

export const linksbottom = [
  {
    id: 1,
    name: "Downloads",
    path: "/downloads",
    icon: <DownloadsIcon />,
  },
  {
    id: 2,
    name: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];
