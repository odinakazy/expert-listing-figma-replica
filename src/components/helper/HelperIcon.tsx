type HeaderIconProps = {
  icon: string;
  label: string;
};

function HeaderIcon({ icon, label }: HeaderIconProps) {
  return (
    <div className="relative group">
      {/* Icon */}
      <div className="h-11 w-11 flex items-center justify-center rounded-md hover:bg-white/20 cursor-pointer transition">
        <img src={icon} alt={label} className="h-5 w-5 object-contain" />
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0E4F3F] px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-1">
        {label}
      </div>
    </div>
  );
}

export default HeaderIcon;
