import useDevice, { DEVICE } from '@/lib/hooks/useDevice';
import { createContext, PropsWithChildren } from 'react';

export const DeviceContext = createContext<keyof typeof DEVICE>(DEVICE.mobile);

function DeviceProvider({ children }: PropsWithChildren) {
  const device = useDevice();

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
}

export default DeviceProvider;
