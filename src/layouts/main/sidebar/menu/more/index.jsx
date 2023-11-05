import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-1 block group outline-none">
        <div className="p-3 rounded-full inline-flex transition-colors items-center gap-5  group-hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width={26.25}
              height={26.25}
            >
              <path
                fill="#e7e9e6"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>

          <span className="text-xl pr-4">Daha Fazla</span>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
        <button className="px-4 h-14 w-full inline-flex transition-colors items-center gap-5  hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width={26.25}
              height={26.25}
            >
              <path
                fill="#e7e9e6"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>

          <span className="text-xl pr-4 font-bold">Bağlan</span>
        </button>
        <button className="px-4 h-14 w-full inline-flex transition-colors items-center gap-5  hover:bg-[#eff3f41a]">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width={26.25}
              height={26.25}
            >
              <path
                fill="#e7e9e6"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>

          <span className="text-xl pr-4 font-bold">Para Kazanma</span>
        </button>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors hover:bg-[#eff3f41a] w-full px-4 font-bold">
            İçerik Üretici Stüdyosu
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="accordion-chevron"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              İstatistikler
            </Link>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors hover:bg-[#eff3f41a] w-full px-4 font-bold">
            Profesyonel Araçlar
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="accordion-chevron"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              Reklamlar
            </Link>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors hover:bg-[#eff3f41a] w-full px-4 font-bold">
            Ayarlar ve Destek
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="accordion-chevron"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              Ayarlar ve Gizlilik
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              Yardım Merkezi
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              Görünüm
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="accordion-chevron"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                />
              </svg>
              Klavye Kısayolları
            </Link>
          </Disclosure.Panel>
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
}
