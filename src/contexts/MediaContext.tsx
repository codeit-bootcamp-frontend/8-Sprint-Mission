import { createContext, PropsWithChildren, useMemo } from 'react'
import useDevice, { DEVICE } from 'src/hooks/useDevice'
import { ValueOf } from 'src/types'

type MediaContextType = {
  device: ValueOf<typeof DEVICE>
}

export const MediaContext = createContext<MediaContextType>({
  device: DEVICE.MOBILE,
})

function MediaProvider({ children }: PropsWithChildren) {
  const device = useDevice()

  const value = useMemo(
    () => ({
      device,
    }),
    [device]
  )

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}

export default MediaProvider
