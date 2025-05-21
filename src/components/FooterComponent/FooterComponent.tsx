import FacebookComponent from "../IconComponents/FacebookComponent";
import InstagramComponent from "../IconComponents/InstagramComponent";
import LinkedInComponent from "../IconComponents/LinkedInComponent";
import LogoComponent from "../IconComponents/LogoComponent";
import TwitterComponent from "../IconComponents/TwitterComponent";

export default function FooterComponent() {
  return (
    <footer className="text-gray-300 body-font">
      <div className="container py-8 lg:w-[1136px] mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
          <LogoComponent />
          <span className="ml-3 text-xl">Josephine</span>
        </a>
        <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">
          © 2023 Minuettaro —
          <a
            href="https://github.com/bintangyosua"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Minuettaro
          </a>
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
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
