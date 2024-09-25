import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:px-0 px-12 border-t dark:border-zinc-50/10">
      <div className="lg:max-w-[63rem] md:max-w-[40rem] flex justify-between items-center py-10 mx-auto">
        <div>
          <Link
            href="/about"
            className="mr-4 text-zinc-600 font-medium text-sm hover:text-zinc-800"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-zinc-600 font-medium text-sm hover:text-zinc-800"
          >
            Projects
          </Link>
        </div>
        <div className="text-zinc-400 text-base">
          © 2024 Eke Francis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
