import { useNavigate } from "react-router-dom";
import { Home, StopCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Large animated musical note */}
        <div className="flex justify-center animate-bounce">
          <StopCircleIcon className="h-24 w-24 text-rose-600 animate-spin duration-1000" />
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-red-500">Unauthorized</h2>
          <p className="text-neutral-400 max-w-md mx-auto">
            You do not have permission to access this page.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
