import { Tabs, Box, Text } from '@radix-ui/themes';
import { useTabStore } from '@/stores'; // Ensure this path is correct

// Define a type for the keys of the tabs
type TabKey = 'account' | 'documents' | 'settings';

const Tab = () => {
  const { activeTab, setActiveTab } = useTabStore();

  // Define the tabContents object with the type for keys
  const tabContents: Record<TabKey, string> = {
    account: 'Active Tab: Account',
    documents: 'Active Tab: Documents',
    settings: 'Active Tab: Settings',
  };

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value='account'>Account</Tabs.Trigger>
        <Tabs.Trigger value='documents'>Documents</Tabs.Trigger>
        <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
      </Tabs.List>

      <Box pt='3'>
        {Object.keys(tabContents).map((tabKey) => (
          <Tabs.Content key={tabKey} value={tabKey}>
            <Text size='7'>{tabContents[tabKey as TabKey]}</Text>
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  );
};

export default Tab;
