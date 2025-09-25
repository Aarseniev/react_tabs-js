export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const hasActiveTab = tabs.find(tab => tab.id === activeTabId);
  const activeTabData = hasActiveTab || tabs[0];

  if (!tabs.length) {
    return null;
  }

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTabData.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tab.id === activeTabData.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeTabData.id) {
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

        <div className="block" data-cy="TabContent">
          {activeTabData.content}
        </div>
      </div>
    </div>
  );
};
