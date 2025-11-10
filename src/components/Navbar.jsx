import React from 'react';
import { Calendar, Search, User } from 'lucide-react';

const Navbar = ({ onSearch, theme }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${theme.gradFrom}, ${theme.gradTo})`,
              }}
            />
            <span className="text-xl font-semibold tracking-tight">PlanWab</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                onChange={(e) => onSearch?.(e.target.value)}
                type="text"
                placeholder="Search venues, decorators, photographers..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300"
              />
            </div>
            <button
              className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
            >
              <Calendar className="w-4 h-4 inline-block mr-2" /> Planner
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
            >
              Become a Vendor
            </button>
            <button
              className="px-3 py-2 rounded-lg text-white text-sm shadow-md"
              style={{
                background: `linear-gradient(135deg, ${theme.gradFrom}, ${theme.gradTo})`,
              }}
            >
              <User className="w-4 h-4 inline-block mr-2" /> Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
