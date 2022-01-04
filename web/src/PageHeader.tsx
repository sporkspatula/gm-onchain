import { InfoLayout } from "./InfoLayout";
import { SetColorProvider } from "./SetColorProvider";

export const PageHeader = ({ children }: { children: React.ReactNode }) => (
  <SetColorProvider>
    <InfoLayout>{children}</InfoLayout>
  </SetColorProvider>
);
