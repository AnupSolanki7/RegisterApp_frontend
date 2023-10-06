import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { usersLogout } from "../../redux/userReducer";

const Dashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <>
      <Navbar className="bg-gray-800">
        <NavbarBrand>
          <p className="font-bold text-white">ACME</p>
        </NavbarBrand>
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={`${user.firstName} ${user.lastName}`}
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="role">{user.role}</DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                className="text-blue-500"
                onClick={() => dispatch(usersLogout())}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="w-full h-20 flex justify-center items-center">
        <h1 className="text-2xl text-gray-500">
          welcome {user.firstName.toUpperCase()} {user.lastName.toUpperCase()} you are a {user.role}
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
