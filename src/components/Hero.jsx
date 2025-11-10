import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const CategoryPill = ({ label, colorFrom, colorTo, onClick }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden px-5 py-3 rounded-full text-sm font-medium border border-white/30 bg-white/60 hover:bg-white/80 backdrop-blur transition"
    style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
  >
    <span
      className="absolute inset-0 opacity-70 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
      }}
    />
    <span className="relative z-10 mix-blend-multiply text-gray-800">
      {label}
    </span>
  </button>
);

const Hero = ({ theme, onSelectCategory }) => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5bLXa0vzf0p6rQmM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${theme.gradFrom}22 0%, transparent 60%), radial-gradient(ellipse at bottom, ${theme.gradTo}22 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-white/60 backdrop-blur text-xs font-medium text-gray-700">
            <Sparkles className="w-4 h-4 text-yellow-500" /> Plan Smarter, Celebrate Better
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Create unforgettable moments with PlanWab
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover curated vendors, manage your checklist and budget, and bring your event vision to life — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CategoryPill
              label="Wedding"
              colorFrom="#fce7f3"
              colorTo="#f5d0fe"
              onClick={() => onSelectCategory('wedding')}
            />
            <CategoryPill
              label="Anniversary"
              colorFrom="#fff1b1"
              colorTo="#fde68a"
              onClick={() => onSelectCategory('anniversary')}
            />
            <CategoryPill
              label="Birthday"
              colorFrom="#bfdbfe"
              colorTo="#c4b5fd"
              onClick={() => onSelectCategory('birthday')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
