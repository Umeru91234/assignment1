import Link from 'next/link';

const Page = () => { 
  return (
    <div className='text-2xl font-extrabold shadow-lg text-center p-[80px] bg-yellow-200'>
      <ul>
        <li>
      <Link href="/about">ABOUT</Link>
      </li>
      <li>
      <Link href="/contact">CONTACT</Link>
      </li>
      <li>
      <Link href="/service">SERVICE</Link>
      </li>
      </ul>
    </div>
  );
};

export default Page;

