import FacebookComponent from "../IconComponents/FacebookComponent";
import InstagramComponent from "../IconComponents/InstagramComponent";
import LinkedInComponent from "../IconComponents/LinkedInComponent";
import LogoComponent from "../IconComponents/LogoComponent";
import TwitterComponent from "../IconComponents/TwitterComponent";

export default function FooterComponent() {
  return (
    <footer className="text-gray-300 body-font">
      <div className="container py-8 lg:w-[1136px] mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <LogoComponent />
          <span className="ml-3 text-xl">Skyla</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Skyla —
          <a
            href="https://twitter.com/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer">
            @Minuettaro
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-400">
            <FacebookComponent />
          </a>
          <a className="ml-3 text-gray-400">
            <TwitterComponent />
          </a>
          <a className="ml-3 text-gray-400">
            <InstagramComponent />
          </a>
          <a className="ml-3 text-gray-400">
            <LinkedInComponent />
          </a>
        </span>
      </div>
    </footer>
  );
}
