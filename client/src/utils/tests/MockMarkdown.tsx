import React from "react";

const MockMarkdown: React.FC<{ children: string }> = ({ children }) => {
    return <div data-testid="markdown">{children}</div>;
};

export default MockMarkdown;
