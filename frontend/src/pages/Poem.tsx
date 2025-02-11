import Drawer from "@/components/Drawer";
import { Input } from "@/components/ui/input";

export const Poem = () => {
  return (
    <div className="bg-slate-950 h-screen ">
      <div className="py-2 px-3 flex items-center gap-4">
        <div className="flex items-center pt-1">
          <Drawer />
        </div>
        <div className="text-slate-600 font-semibold text-2xl">
          LyriCraft AI
        </div>
      </div>
      <div className="flex gap-2 px-3 md:px-12">
        <div className="w-full">
          <Input
            type="text"
            placeholder="Enter your prompt"
            className="text-slate-400 py-[24px] rounded-3xl md:text-lg"
          />
        </div>
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
