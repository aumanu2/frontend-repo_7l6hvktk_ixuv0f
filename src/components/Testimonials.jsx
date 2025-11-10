import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha & Daniel',
    text: 'PlanWab made our wedding effortless. We booked all our vendors in one place and stayed on top of our checklist.',
    role: 'Wedding in Napa Valley'
  },
  {
    name: 'Rahul',
    text: 'The birthday planning dashboard kept me organized and on budget. Vendors were top-notch!',
    role: '30th Birthday - Austin'
  },
  {
    name: 'Mr & Mrs. Carter',
    text: 'Loved the curated recommendations. We discovered amazing decorators we wouldn\'t have found otherwise.',
    role: '25th Anniversary - Seattle'
  }
];

const Testimonials = ({ theme }) => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${theme.gradFrom}22 0%, transparent 60%)` }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">What people are saying</h2>
          <p className="text-gray-600 mt-1">Real celebrations. Real stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Quote className="w-6 h-6 text-gray-400" />
              <p className="mt-3 text-gray-700">{t.text}</p>
              <div className="mt-5">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
