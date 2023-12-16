
export interface TimelineProps {
    icon?: any;
    items?: {
      title: string;
      date: string;
      description: string;
    }[];
  }
  
export interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    icon?: any;
  }