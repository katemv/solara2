import type { Meta, StoryObj } from "@storybook/react";

import Modal, { ModalProps } from "./Modal.component";
import Button from "../../Atoms/Button/Button.component";
import { useState } from "react";
import Text from "../../Atoms/Text/Text.component";

const meta = {
    title: "Molecules/Modal",
    component: Modal,
    argTypes: {
        visible: {control: "boolean"},
        maxWidth: {control: "number"},
        maxHeight: {control: "number"},
        minHeight: {control: "number"},
    },
    args: {
        visible: false,
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<ModalProps>;

const StoryComponent = (props: ModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button label="Open" onClick={() => setIsVisible(true)} />
            <Modal {...props} visible={isVisible} onClose={() => setIsVisible(false)}>
                <Text
                    as="h3"
                    plainText="Luminary Dust"
                    appearance="headline4"
                    textAlign="left"
                    marginBottom="spacing4"
                />
                <Text
                    as="p"
                    plainText={`Submerge yourself in the radiance of deep space nebulae with LuminaryDust - a 
                        cosmic-inspired highlighter. Created with minerals found in the heart of distant galaxies,
                        this unique highlighter acts as a wearable homage to the beauty of the cosmos.
                    `}
                    appearance="paragraph"
                    textAlign="left"
                    fontWeight={300}
                    color="dark20"
                />
            </Modal>
        </>
    );
};

export const ModalStory: Story = {
    render: StoryComponent
};
