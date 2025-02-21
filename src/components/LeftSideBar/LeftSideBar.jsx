import { Tooltip } from "@material-tailwind/react";
import { Avatar, Badge } from "@material-tailwind/react";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col h-screen bg-white border-2 border-r-xl shadow-lg">
      <div className="md:m-5 hidden md:block">
        <Tooltip content="Profile" placement="top">
          <Badge
            placement="top-end"
            overlap="circular"
            color="green"
            withBorder
          >
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xl"
            />
          </Badge>
        </Tooltip>
      </div>
      <div className="md:m-5 block md:hidden">
        <Tooltip content="Profile" placement="top">
          <Badge
            placement="top-end"
            overlap="circular"
            color="green"
            withBorder
          >
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="md"
            />
          </Badge>
        </Tooltip>
      </div>
    </div>
  );
};

export default LeftSideBar;
