import { Link } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";
import { SignedOut, UserButton } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/useAuthStore";

import { buttonVariants } from "./ui/buttonVariants";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
  const { isAdmin } = useAuthStore();

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-1 items-center">
        <img src="/logo.svg" className="size-10" alt="logo" />
        beLagu
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to={"/admin"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
