import { Meta, StoryObj } from "@storybook/react";
import { AuthModal } from "./AuthModal";
import { Box } from "@mui/material";
import { APP_CONFIG } from "../../app.config";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { web3Onboard } from "../EthereumConnect/EthereumConnect.stories";


const meta: Meta<typeof AuthModal> = {
  component: AuthModal,
  title: "Auth32/AuthModal",
}

export default meta;

type Story = StoryObj<typeof AuthModal>;

const Template = (args: Story) => {
  return (
    <GoogleOAuthProvider clientId={APP_CONFIG.google.id}>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <AuthModal
            {...args}
          />
        </Box>
      </Web3OnboardProvider>
    </GoogleOAuthProvider>
  )
};

export const Default: Story = Template.bind({});
Default.args = {
  Facebook: true,
  Google: true,
  Apple: true,
  Web3: true,
};

