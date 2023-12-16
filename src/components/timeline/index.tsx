import React from "react";
import { TimelineProps } from '@/lib/interfaces/components'
import TimelineItem from "./TimelineItem";

const TimelineApp: React.FC<React.PropsWithChildren<TimelineProps>> = ({items,icon,children}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:bg-gray-900">
      {
        items?.map((item, index) => (
          <TimelineItem
            key={index + item.title}
            title={item.title}
            date={item.date}
            description={item.description}>
            {children}
            </TimelineItem>
        ))
      }
    </ol>
  );
};


export default TimelineApp;
