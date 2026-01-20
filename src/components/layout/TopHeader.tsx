import Logo from "@/assets/Logo.png";
import ActivityIcon from "@/assets/Activity.png";
import BudgetingIcon from "@/assets/Budgeting.png";
import CalendarIcon from "@/assets/calendar.png";
import ShopIcon from "@/assets/shop.png";
import WalletIcon from "@/assets/Wallet.png";
import HeaderIcon from "../helper/HelperIcon";
import ProfileAvatar from "../helper/ProfileAvatar";

function TopHeader() {
  return (
    <header className="w-full bg-[#105B48]">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-14 py-3 md:py-0 text-white">
        {/* Left: Logo */}
        <div className="flex items-center justify-center mb-2 md:mb-0 h-12 md:h-14 w-24 md:w-30">
          <img
            src={Logo}
            alt="Expert Listing"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Right: Action Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <HeaderIcon icon={BudgetingIcon} label="Budgeting" />
          <HeaderIcon icon={CalendarIcon} label="Calendar" />
          <HeaderIcon icon={ActivityIcon} label="Search Activity" />
          <HeaderIcon icon={WalletIcon} label="Payout Center" />
          <HeaderIcon icon={ShopIcon} label="Marketplace" />

          {/* Profile */}
          <ProfileAvatar />
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
