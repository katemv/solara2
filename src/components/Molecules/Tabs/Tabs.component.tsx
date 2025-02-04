import { CSSProperties, FC, ReactNode, useState } from "react";

import Flex from "../../Atoms/Flex/Flex.component";
import Tab from "./Tab/Tab.component";

interface TabConfig {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabConfig[];
    activeTab?: number;
    style?: CSSProperties;
}

const Tabs: FC<TabsProps> = ({ tabs, style, activeTab = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(activeTab);

    return (
        <>
            <Flex direction="column" fullWidth style={style}>
                <Flex gap="spacing3" marginBottom="spacing4" wrap fullWidth>
                    {tabs.map((tab, index) => (
                        <Tab
                            key={tab.label}
                            isActive={activeIndex === index}
                            label={tab.label}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </Flex>
            </Flex>
            {tabs[activeIndex]?.content}
        </>
    );
};

export default Tabs;
