import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'
import React from 'react'
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products/payment' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products/terminal' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products/connect' },
      { label: 'transfer', icon: <FaCreditCard />, url: '/products/transfer' },
      { label: 'payroll', icon: <FaCreditCard />, url: '/products/payroll' },
      { label: 'account', icon: <FaCreditCard />, url: '/products/account' },
      { label: 'register', icon: <FaCreditCard />, url: '/products/register' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/developers/plugins' },
      { label: 'libraries', icon: <FaBook />, url: '/developers/libraries' },
      { label: 'help', icon: <FaBook />, url: '/developers/help' },
      { label: 'billing', icon: <FaBook />, url: '/developers/billing' },
      { label: 'references', icon: <FaBook />, url: '/developers/references' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/company/about' },
      { label: 'customers', icon: <FaBriefcase />, url: '/company/customers' },
    ],
  },
]

export default sublinks
