import type { ReactNode } from "react";
import type { Frame } from "@/config/projects";

/* ② — wraps a live demo in a real phone or browser chrome. */
export function DeviceFrame({ frame, children }: { frame: Frame; children: ReactNode }) {
  if (frame === "phone") {
    return (
      <div className="mx-auto w-full max-w-[200px]">
        <div className="rounded-[26px] border border-line bg-tile-2 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="relative overflow-hidden rounded-[18px] border border-line bg-ground p-3">
            <span className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-line" />
            <div className="pt-3">{children}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-line bg-tile-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="mono ml-2 truncate text-[10px] text-faint">localhost</span>
        </div>
        <div className="bg-ground p-4">{children}</div>
      </div>
    </div>
  );
}
