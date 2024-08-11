import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

let browserQueryClient: QueryClient | undefined;

function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
        gcTime: 60 * 1000,
      },
    },
  });
}

export function getQueryClient() {
  if (isServer) {
    return generateQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = generateQueryClient();
    return browserQueryClient;
  }
}

const queryClient = getQueryClient();

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
