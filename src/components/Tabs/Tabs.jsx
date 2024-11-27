import classNames from 'classnames';

export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': activeTab === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTab !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map(
        tab =>
          selectedTab.id === tab.id && (
            <div key={tab.id} className="block" data-cy="TabContent">
              {tab.content}
            </div>
          ),
      )}
    </div>
  );
};
