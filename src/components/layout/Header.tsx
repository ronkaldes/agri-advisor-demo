
import React, { useState } from 'react';
import { Search, User, Bell } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'אדמה חכמה' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-agri-darkgreen">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="agri-input w-64 pl-10"
              dir="rtl"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={22} className="text-agri-darkgray" />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User size={22} className="text-agri-darkgray" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="cursor-pointer">פרופיל</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">הגדרות</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">התנתקות</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
