import React from 'react'
import { CFooter } from '@coreui/react'
import navigation from '../assets/json/navigations.json'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href={navigation.clientInfo.to} target="_blank" rel="noopener noreferrer">
        {navigation.clientInfo.title}
        </a>
        <span className="ms-1">&copy; 2022 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href={navigation.hexawareInfo.to} target="_blank" rel="noopener noreferrer">
        {navigation.hexawareInfo.title}
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
