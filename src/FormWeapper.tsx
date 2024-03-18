import { ReactNode } from "react";
import Auto from "../public/auto.png";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Omoda</span>
                <img
                  alt="Omoda"
                  className="h-8 w-auto"
                  src="https://omoda.cl/wp-content/uploads/2023/10/Omoda_wordmark.svg.png"
                />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 sm:py-24 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6">
                    {/** aca va el 1/2 */}
                  </div>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  {title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {children}{" "}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                {/** aca van los btns */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={Auto}
            alt="Auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
