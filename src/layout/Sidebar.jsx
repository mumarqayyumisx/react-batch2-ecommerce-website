import { Home, Package2, Settings, ShoppingBasket } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const navItems = [
  { icon: Home, label: "Dashboard", path: ROUTES.home },
  { icon: ShoppingBasket, label: "Products", path: ROUTES.products },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 z-10 max-w-14">
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>

            {navItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className="group cursor-pointer"
                    onClick={() => {
                      handleNavigate(item.path);
                    }}
                  >
                    <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                    <span className="sr-only">{item.label}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </nav>

          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group cursor-pointer">
                  <Settings className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                  <span className="sr-only">Settings</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>
    </div>
  );
};
