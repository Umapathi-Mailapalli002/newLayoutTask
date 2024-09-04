import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function RightCard({ children, className, tooltip }) {
  return (
    <div
      className={`bg-[#363c43] py-5 px-3 h-[41.5vh] w-full rounded-3xl shadow-[4px_4px_7px_0px_black] flex ${className}`}
    >
      <div className="flex flex-col h-full lg:mr-3 mr-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="relative -ml-1">
              <svg
                fill="url(#grad4)"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad4"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#9ba9b9" />
                    <stop offset="100%" stop-color="#4c545b" />
                  </linearGradient>
                </defs>
                <g data-name="Layer 2">
                  <g data-name="menu-arrow-circle">
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(180 12 12)"
                      opacity="0"
                      co
                    />

                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />

                    <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z" />

                    <circle cx="12" cy="17" r="1" />
                  </g>
                </g>
              </svg>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="grid grid-cols-2 w-4 gap-[0_4px] mt-[95px]">
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
          <div className="bg-[#4a4e54] mt-[2px] rounded-[1.5px] size-2"></div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default RightCard;
