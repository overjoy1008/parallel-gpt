// import NavLinks from '@/app/ui/dashboard/nav-links';

import Link from 'next/link';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SideNav(props: any) {
  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 flex flex-col justify-between background-gray pl-4 pr-2 pt-4 pb-5 transform transition-transform duration-300 ease-in-out ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end">
          <Link href={'/2/chat'}>
            <button className="w-8"><PencilSquareIcon className="w-6 gray-500" /></button>
          </Link>
        </div>
        <Link href={'/'}>
          <button className="w-8"><ArrowLeftEndOnRectangleIcon className="w-6 gray-500" /></button>
        </Link>
        
    </div>
  );
}
