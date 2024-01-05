import React from 'react'

import { BiLogOut } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { TfiLayoutListPost } from "react-icons/tfi"
import { MdOutlineCreate } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import Link from 'next/link'

export default function PublishAndSettingBtns() {
  return (
    <div className='max-w-7xl text-center mx-auto flex justify-end gap-4 mb-4'> 
        <Link
                href="/addblog"
                className={`flex items-center gap-2.5 rounded-sm py-2 px-4 pr-6 font-medium bg-white text-graydark  hover:bg-graydark hover:text-white`}
              >
                <MdOutlineCreate
                  size={20}
                  className="fill-current"
                />
                Publish
              </Link>
              <Link
                href="/dashboard/settings"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 pr-6 font-medium bg-white text-graydark hover:bg-graydark hover:text-white`}
              >
                <IoSettingsOutline
                  size={20}
                  className="fill-current"
                />
                Setting
              </Link>
    </div>
  )
}
