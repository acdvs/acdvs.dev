'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

function AccordionItem({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="border-b-2 border-slate-600 hover:border-slate-400">
      <div
        className="py-2 flex justify-between cursor-pointer"
        onClick={() => setOpen((x) => !x)}
      >
        <p className="m-0 font-bold">{label}</p>
        <ChevronDown
          className={clsx(isOpen && 'rotate-180', 'w-5 transition-transform')}
        />
      </div>
      <div
        className={clsx(
          className,
          isOpen ? 'auto-height mb-3' : 'h-0',
          'overflow-hidden transition-[height]',
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { AccordionItem };
