import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center relative">
      <footer className="max-w-[1080px] footer bg-base-200/60 px-6 py-4">
        <div className="flex w-full flex-wrap items-center justify-between">
          <aside className="grid-flow-col items-center text-lg text-[#342c3d76]">
            <p>©2024 Copy right reserved.</p>
          </aside>
          <div className="flex h-5 gap-4 text-lg text-[#342c3d76]">
            <Link
              href="https://github.com/Bogale"
              className="link"
              aria-label="Github Link"
            >
              <span className="icon-[tabler--brand-github] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </Link>
            <Link href="#" className="link" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
