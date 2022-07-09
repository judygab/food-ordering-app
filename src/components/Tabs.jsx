import { useState } from 'react';
import { TabItem } from './TabItem';

export const Tabs = ({ list, activeTab, onTabSwitch }) => {

  return (
    <div className="sticky z-1900 bg-white">
      <div className="container mx-auto flex align-center py-2 border-b-gray-400 border-b-2">
        {list.map((item, index) => {
          return (
            <TabItem
              title={item}
              key={index}
              index={index}
              active={activeTab === item}
              setActive={onTabSwitch}
            />
          );
        })}
      </div>
    </div>
  );
};
