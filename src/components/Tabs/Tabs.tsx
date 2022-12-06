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
  value?: string;
}

export interface TabsProps {
  activeTab?: string;
  items: TabItem[];
  onChange?: (name: string) => void;
}

const validId = (str: string) => str.replace(/\s/, '_');

export const Tabs = ({ activeTab, items, onChange }: TabsProps) => {
  const idBase = useId();

  // Generate values for undefined properties
  const tabs: Required<TabItem>[] = items.map(
    ({
      name,
      content,
      value: optionalValue,
      tabId: optionalTabId,
      panelId: optionalPanelId,
    }) => {
      const value = optionalValue ?? name;
      const tabId = optionalTabId ?? idBase + validId(value) + '-tab';
      const panelId = optionalPanelId ?? idBase + validId(value) + '-panel';
      return { name, content, value, tabId, panelId };
    },
  );

  if (!areItemsUnique(tabs.map(({ value }) => value))) {
    throw Error('Each tab value must be unique.');
  }
  if (activeTab !== undefined && !tabs.some((tab) => tab.value === activeTab)) {
    throw Error('The given active tab value must exist in the list of items.');
  }

  const findTabIndexByValue = (value: string) =>
    tabs.findIndex((tab) => tab.value === value);
  const initialTab = activeTab ?? tabs[0].value;
  const [visiblePanel, setVisiblePanel] = useState<string>(initialTab);
  const [focusIndex, setFocusIndex] = useState<number>(
    findTabIndexByValue(initialTab),
  );
  useEffect(() => setVisiblePanel(initialTab), [initialTab]);
  const tablistRef = useRef<HTMLDivElement>(null);
  const lastIndex = tabs.length - 1;

  useUpdate(() => {
    tablistRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [focusIndex].focus();
  }, [focusIndex]);

  const selectTab = (value: string) => {
    visiblePanel !== value && onChange && onChange(value);
    setVisiblePanel(value);
    setFocusIndex(findTabIndexByValue(value));
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

  return (
    <div className={classes.tabs}>
      <div
        className={classes['tabs__tablist']}
        ref={tablistRef}
        role='tablist'
      >
        {tabs.map((tab, i) => {
          const isSelected = tab.value === visiblePanel;
          const className = cn(
            classes['tabs__tablist__tab'],
            isSelected && classes['tabs__tablist__tab--selected'],
          );
          return (
            <button
              aria-controls={tab.panelId}
              aria-selected={isSelected}
              className={className}
              id={tab.tabId}
              key={tab.value}
              onClick={() => selectTab(tab.value)}
              onKeyDown={onKeyDown(tab.value)}
              role='tab'
              tabIndex={focusIndex === i ? 0 : -1}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <hr className={classes['tabs__divider']} />
      {tabs.map((tab) => (
        <div
          className={classes['tabs__tabpanel']}
          aria-labelledby={tab.tabId}
          hidden={tab.value !== visiblePanel}
          id={tab.panelId}
          key={tab.panelId}
          role='tabpanel'
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
