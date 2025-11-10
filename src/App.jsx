import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Testimonials from './components/Testimonials';

const themes = {
  wedding: { gradFrom: '#F8D7E8', gradTo: '#F3C6FF', key: 'wedding' },
  anniversary: { gradFrom: '#FDE9A5', gradTo: '#F7D06D', key: 'anniversary' },
  birthday: { gradFrom: '#C7DBFF', gradTo: '#C9B8FF', key: 'birthday' },
};

export default function App() {
  const [category, setCategory] = useState('wedding');
  const theme = useMemo(() => themes[category], [category]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar theme={theme} />
      <Hero theme={theme} onSelectCategory={setCategory} />

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Quick Planner</h3>
            <div className="inline-flex rounded-lg overflow-hidden border border-gray-200">
              {Object.keys(themes).map((k) => (
                <button
                  key={k}
                  onClick={() => setCategory(k)}
                  className={`px-3 py-1.5 text-sm ${category === k ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marketplace theme={theme} />
      <Testimonials theme={theme} />

      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} PlanWab. Plan smarter, celebrate better.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-gray-900" href="#">About</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
            <a className="hover:text-gray-900" href="#">For Vendors</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
