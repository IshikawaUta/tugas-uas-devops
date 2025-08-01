import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <StaticImage
                  src="../img/logo-dessert.png"
                  alt="Logo SMK Daarussaadah"
                  layout="fixed"
                  width={40}
                  height={40}
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
                <div className="text-xl font-bold tracking-wide">
                  <span className="text-gray-800 font-semibold">Lite</span>
                  <span className="text-green-700">Silky Dessert</span>
                </div>
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
                Selamat datang di Lite Silky Dessert! Kami adalah surga bagi para pecinta makanan manis yang mencari hidangan penutup lezat tanpa rasa bersalah.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Tentang
                </h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Lite Silky Dessert
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Komunitas
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Karir
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Artikel
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Sosmed
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Kerjasama
                </h3>
                <a
                  href="https://www.instagram.com/lite_dessert/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Lite Dessert
                </a>
                <a
                  href="https://www.instagram.com/lite_dessert/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Silky Dessert
                </a>
                <a
                  href="https://facebook.com/smk-daarussaadah"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fan Page
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Kontak
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +62 85300000
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  info@litedessertdrink.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Lite Silky Dessert 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
