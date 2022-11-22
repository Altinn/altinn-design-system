import type { KeyboardEventHandler } from 'react';
import React, { useEffect, useId, useRef, useState } from 'react';
import cn from 'classnames';

import { areItemsUnique } from '@/utils/arrayUtils';
import { useUpdate } from '@/hooks';

import classes from './Tabs.module.css';

export interface TabItem {
  name: string;
  content: React.ReactNode;
  tabId?: string;
  panelId?: string;
}

export interface TabsProps {
  activeTab?: string;
  items: TabItem[];
  onChange?: (name: string) => void;
}

interface Ids {
  panelId: string;
  tabId: string;
}

export const Tabs = ({ activeTab, items, onChange }: TabsProps) => {
  if (!areItemsUnique(items.map(({ name }) => name))) {
    throw Error('Each tab name must be unique.');
  }
  if (
    activeTab !== undefined &&
    !items.some(({ name }) => name === activeTab)
  ) {
    throw Error('The given active tab name must exist in the list of items.');
  }

  const findTabIndexByName = (name: string) =>
    items.findIndex((item) => item.name === name);
  const initialTab = activeTab ?? items[0].name;
  const [visiblePanel, setVisiblePanel] = useState<string>(initialTab);
  const [focusIndex, setFocusIndex] = useState<number>(
    findTabIndexByName(initialTab),
  );
  useEffect(() => setVisiblePanel(initialTab), [initialTab]);
  const tablistRef = useRef<HTMLDivElement>(null);
  const idBase = useId();
  const lastIndex = items.length - 1;

  useUpdate(() => {
    tablistRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [focusIndex].focus();
  }, [focusIndex]);

  const selectTab = (name: string) => {
    visiblePanel !== name && onChange && onChange(name);
    setVisiblePanel(name);
    setFocusIndex(findTabIndexByName(name));
  };

  const moveFocusRight = () =>
    focusIndex !== undefined &&
    setFocusIndex(focusIndex === lastIndex ? 0 : focusIndex + 1);
  const moveFocusLeft = () =>
    focusIndex !== undefined &&
    setFocusIndex(focusIndex === 0 ? lastIndex : focusIndex - 1);

  const onKeyDown =
    (name: string) => (event: Parameters<KeyboardEventHandler>[0]) => {
      switch (event.key) {
        case 'ArrowRight':
          moveFocusRight();
          break;
        case 'ArrowLeft':
          moveFocusLeft();
          break;
        case 'Space':
          selectTab(name);
      }
    };

  const idFromName = (name: string) => name.replace(/\s/, '_');
  const idMap = new Map<string, Ids>(
    items.map((item) => [
      item.name,
      {
        panelId: item.panelId ?? `${idBase}-panel-${idFromName(item.name)}`,
        tabId: item.tabId ?? `${idBase}-tab-${idFromName(item.name)}`,
      },
    ]),
  );

  return (
    <div className={classes.tabs}>
      <div
        className={classes['tabs__tablist']}
        ref={tablistRef}
        role='tablist'
      >
        {items.map((item, i) => {
          const isSelected = item.name === visiblePanel;
          const ids = idMap.get(item.name);
          const className = cn(
            classes['tabs__tablist__tab'],
            isSelected && classes['tabs__tablist__tab--selected'],
          );
          return (
            <button
              aria-controls={ids?.panelId}
              aria-selected={isSelected}
              className={className}
              id={ids?.tabId}
              key={item.name}
              onClick={() => selectTab(item.name)}
              onKeyDown={onKeyDown(item.name)}
              role='tab'
              tabIndex={focusIndex === i ? 0 : -1}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <hr className={classes['tabs__divider']} />
      {items.map((item) => {
        const ids = idMap.get(item.name);
        return (
          <div
            className={classes['tabs__tabpanel']}
            aria-labelledby={ids?.tabId}
            hidden={item.name !== visiblePanel}
            id={ids?.panelId}
            key={ids?.panelId}
            role='tabpanel'
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
};
