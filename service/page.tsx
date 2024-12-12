import Link from "next/link";

const Service = () => {
  return (
    <div  className="text-2xl font-extrabold shadow-lg text-center p-[80px] bg-yellow-200">
      <h1>I provide services in web development and graphic design</h1>
      <p>
        Here are the services I offer:
      </p>
      <ul>
        <li>
          <Link href="/service/appdevelopment" className="text-white text-extrabold">App Development</Link>
        </li>
        <li>
          <Link href="/service/websitedevelopment" className="text-white text-extrabold">Website Development</Link>
        </li>
      </ul>
    </div>
  );
};

export default Service;

