'use client';

import { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type TContextValue = string | null;
type TContext = {
  group: string;
  activeItem: TContextValue;
  setActiveItem: (x: TContextValue) => void;
};

const defaultContext = {
  group: '',
  activeItem: null,
  setActiveItem: () => {},
};

const AccordionContext = createContext<TContext>(defaultContext);

function Accordion({ group, children }: { group: string; children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState<TContextValue>(null);

  return (
    <AccordionContext value={{ group, activeItem, setActiveItem }}>
      {children}
    </AccordionContext>
  );
}

function AccordionItem({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { group, activeItem, setActiveItem } = useContext(AccordionContext);

  const contentId = `${group}-${label}-content`.replaceAll(' ', '');
  const isOpen = activeItem === label;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      setActiveItem(isOpen ? null : label);
    }
  };

  return (
    <div className="border-b-2 border-slate-600 hover:border-slate-400">
      <div
        className="py-2 w-full flex justify-between cursor-pointer"
        onClick={() => setActiveItem(isOpen ? null : label)}
      >
        <h3>
          <button onKeyDown={onKeyDown} aria-expanded={isOpen} aria-controls={contentId}>
            {label}
          </button>
        </h3>
        <ChevronDown
          className={clsx(isOpen && 'rotate-180', 'w-5 transition-transform')}
        />
      </div>
      <div
        id={contentId}
        className={clsx(
          className,
          isOpen ? 'auto-height mb-3' : 'h-0',
          'overflow-hidden transition-[height]',
        )}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem };
