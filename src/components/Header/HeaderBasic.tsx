import { DEVICE } from 'src/hooks/useDevice'
import LogoMobile from 'assets/logos/logo_mobile.png'
import LogoNotMobile from 'assets/logos/logo_not_mobile.png'
import { useContext } from 'react'
import { MediaContext } from 'src/contexts/MediaContext'
import * as S from './styled'

function HeaderBasic() {
  const { device } = useContext(MediaContext)

  return (
    <S.Header>
      <S.HeaderContainer>
        {device === DEVICE.MOBILE ? (
          <S.Logo src={LogoMobile} />
        ) : (
          <S.Logo src={LogoNotMobile} />
        )}
      </S.HeaderContainer>
    </S.Header>
  )
}

export default HeaderBasic
