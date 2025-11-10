import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';

const vendorsMock = [
  {
    id: 1,
    name: 'Luna Garden Venue',
    type: 'Venue',
    rating: 4.8,
    location: 'San Francisco, CA',
    price: '$$'
  },
  {
    id: 2,
    name: 'Golden Hour Photography',
    type: 'Photography',
    rating: 4.9,
    location: 'Los Angeles, CA',
    price: '$$'
  },
  {
    id: 3,
    name: 'Champagne & Petals Decor',
    type: 'Decoration',
    rating: 4.7,
    location: 'San Diego, CA',
    price: '$$'
  },
  {
    id: 4,
    name: 'Sweet Symphony Catering',
    type: 'Catering',
    rating: 4.6,
    location: 'Sacramento, CA',
    price: '$$'
  }
];

const VendorCard = ({ vendor, accent }) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 hover:shadow-xl transition" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
      <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 30% 20%, ${accent}33 0%, transparent 40%), radial-gradient(circle at 70% 70%, ${accent}22 0%, transparent 45%)` }}
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-gray-500">{vendor.type}</div>
          <div className="font-semibold text-gray-900">{vendor.name}</div>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> {vendor.rating}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {vendor.location}</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-gray-200 text-xs text-gray-700 bg-white">
          <DollarSign className="w-4 h-4" /> {vendor.price}
        </div>
      </div>
    </div>
  );
};

const Marketplace = ({ theme }) => {
  const categories = ['Venues', 'Decoration', 'Photography', 'Catering', 'Entertainment', 'Invitations'];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Explore Marketplace</h2>
            <p className="text-gray-600 mt-1">Browse curated vendors and services tailored to your celebration.</p>
          </div>
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} className="px-3 py-1.5 rounded-full border border-gray-200 text-sm bg-white hover:bg-gray-50">{c}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vendorsMock.map((v) => (
            <VendorCard key={v.id} vendor={v} accent={theme.gradTo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
