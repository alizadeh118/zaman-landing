import React from 'react'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation(['header'])
  return (
    <header>
      {t('title')}
    </header>
  )
}
