
import React from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="bg-[#123B64]">
      <div className="mx-auto max-w-7xl px-5 py-0 sm:px-8 sm:py-10 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
          {eyebrow}
        </p>

        <h1 className="mt-2 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
