import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from "next/link";

function Custom404( ) {
  
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },5000);
  },[])

  return (
    <div className="flex-center flex-col w-full h-full mt-7">
      <h1 className="text-6xl font-extrabold m-4 ">404</h1>
      <div className="m-4">Error - Page Not Found</div>
      <div className="m-4">5초 뒤에 자동으로 이동합니다.</div>
      <Link href="/">
        <a className="text-xl">go to main</a>
      </Link>
    </div>
  )
  
}



export default Custom404;
