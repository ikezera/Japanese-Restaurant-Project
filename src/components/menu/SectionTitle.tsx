import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="japanese-heading text-3xl font-extrabold text-gray-900 sm:text-4xl font-['Noto_Sans_JP']">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;