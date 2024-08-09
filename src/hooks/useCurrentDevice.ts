import { useCallback, useEffect, useState } from "react";
import { deviceSizes } from "@/constants/deviceSizes";

type Device = "desktop" | "tablet" | "mobile";

/**
 * 현재 window width값에 따라서 media query를 통해 pc, tablet, mobile인지 체크하는 hook
 * @returns 'desktop' | 'tablet' | 'mobile'
 */
function useCurrentDevice() {
  const { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } = deviceSizes;

  const handleCurrentDevice = useCallback(() => {
    if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
      return "desktop";
    } else if (window.innerWidth >= TABLET_MIN_WIDTH) {
      return "tablet";
    } else {
      return "mobile";
    }
  }, [DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH]);

  const initialDevice = handleCurrentDevice();
  const [currentDevice, setCurrentDevice] = useState<Device>(initialDevice);

  useEffect(() => {
    const handleResize = () => {
      const nextDevice = handleCurrentDevice();
      if (nextDevice !== currentDevice) {
        setCurrentDevice(nextDevice);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentDevice, handleCurrentDevice]);

  return currentDevice;
}

export default useCurrentDevice;
