import { FaRegAddressBook } from "react-icons/fa";
import Switch from "../atoms/Switch";

const Header = () => {
  return (
    <header className="bg-secondaryDark text-primary flex justify-between py-4 px-6">
      <span className="flex items-center gap-2">
        <FaRegAddressBook size={30} />
        <h1>Address Book</h1>
      </span>
      <Switch />
    </header>
  );
};

export default Header;
