
import * as React from "react";

type TabItem = {
  label: React.ReactNode;
  eventKey: string;
  disabled?: boolean;
};

type TabsProps = {
  activeKey: string;
  onSelect: (eventKey: string) => void;
  items: TabItem[];
  children: React.ReactNode;
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({ activeKey, onSelect, items, children, className = "" }) => (
  <>
    <ul className={`nav nav-tabs ${className}`.trim()} role="tablist">
      {items.map(tab => (
        <li className="nav-item" key={tab.eventKey} role="presentation">
          <button
            className={`nav-link${activeKey === tab.eventKey ? " active" : ""}`}
            id={`tab-${tab.eventKey}`}
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected={activeKey === tab.eventKey}
            aria-controls={`tabpanel-${tab.eventKey}`}
            disabled={tab.disabled}
            onClick={() => onSelect(tab.eventKey)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
    <div className="tab-content mt-2">
      {children}
    </div>
  </>
);

type TabPanelProps = {
  eventKey: string;
  activeKey: string;
  children: React.ReactNode;
  className?: string;
};

export const TabPanel: React.FC<TabPanelProps> = ({ eventKey, activeKey, children, className = "" }) => (
  <div
    className={`tab-pane fade${activeKey === eventKey ? " show active" : ""} ${className}`.trim()}
    id={`tabpanel-${eventKey}`}
    role="tabpanel"
    aria-labelledby={`tab-${eventKey}`}
  >
    {children}
  </div>
);
