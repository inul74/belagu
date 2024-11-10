import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 mb-8">
        <Link to="/" className="rounded-lg">
          <img src="/logo.svg" className="size-12 text-black" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Music Manager</h1>
          <p className="text-zinc-400 mt-1">Manage your music catalog</p>
        </div>
      </div>
      <UserButton />
    </div>
  );
};
export default Header;
