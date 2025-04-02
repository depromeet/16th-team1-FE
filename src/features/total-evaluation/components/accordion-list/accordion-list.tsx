import { ReactNode } from 'react';

import * as Accordion from '@radix-ui/react-accordion';

interface AccordionListBase {
  orientation: 'vertical' | 'horizontal';
  children: ReactNode;
}

interface SingleListProps extends AccordionListBase {
  type: 'single';
  defaultValue?: string;
  collapsible?: boolean;
}

interface MultiListProps extends AccordionListBase {
  type: 'multiple';
  defaultValue?: string[];
}

export type AccordionListProps = SingleListProps | MultiListProps;

function AccordionList({ children, ...props }: AccordionListProps) {
  return <Accordion.Root {...props}>{children}</Accordion.Root>;
}
export default AccordionList;
