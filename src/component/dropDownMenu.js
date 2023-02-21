import React from 'react'
import {
  FaCaretDown,
  FaCreativeCommons,
  FaShoppingCart,
  FaGift,
  FaThLarge,
} from 'react-icons/fa'
import { BiCaretUp } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

export const sidebarMenu = [
  {
    title: 'Accommodation',
    path: '/accommodation',
    icon: <FaThLarge />,
    iconClosed: <BiCaretUp />,
    iconOpened: <FaCaretDown />,
    SubNav: [
      {
        title: 'Compose',
        path: '/accommodation/Compose',
        icon: <FaCreativeCommons />,
      },
      {
        title: 'Inbox',
        path: '/accommodation/Inbox',
        icon: <FiMail />,
      },
    ],
  },
  {
    title: 'Order',
    path: '/orders',
    icon: <FaShoppingCart />,
    iconClosed: <BiCaretUp />,
    iconOpened: <FaCaretDown />,
    SubNav: [
      {
        title: 'Items1',
        path: '/orders/Item1',
        icon: <FaCreativeCommons />,
      },
      {
        title: 'Item2',
        path: '/order/Item2',
        icon: <FaGift />,
      },
    ],
  },
]
