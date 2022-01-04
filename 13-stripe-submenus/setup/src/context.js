import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSideBar = () => {
    setIsSideBar(true)
  }
  const closeSideBar = () => {
    setIsSideBar(false)
  }
  const openSubMenu = (text, coordinates) => {
    const selectedPage = sublinks.find((item) => item.page === text)
    setPage(selectedPage)
    setLocation(coordinates)
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideBar,
        isSubMenuOpen,
        openSideBar,
        closeSideBar,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
