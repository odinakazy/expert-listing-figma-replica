import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function ProfileAvatar() {
  return (
    <HoverCard openDelay={100}>
      {/* Avatar */}
      <HoverCardTrigger asChild>
        <div className="ml-2 h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#105B48] font-semibold text-sm cursor-pointer">
          D
        </div>
      </HoverCardTrigger>

      {/* Hover Card */}
      <HoverCardContent
        side="bottom"
        align="end"
        className="w-56 rounded-lg bg-white p-3 shadow-lg"
      >
        <p className="text-sm font-semibold text-gray-900">Dylan Frank</p>
        <p className="text-xs text-gray-500">dylanfran96@gmail.com</p>
      </HoverCardContent>
    </HoverCard>
  );
}

export default ProfileAvatar;
