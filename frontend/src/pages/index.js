import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import HeroImage from "../../public/Hero/hero.jpg";
import DiscoverImage from "../../public/Hero/index-discover.svg";
import { IoSearchOutline } from "react-icons/io5";
import { fields } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(fields);
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__wrapper-grid">
            <div className="hero-first">
              <div>
                <h1>
                  Discover scientific knowledge and stay connected to the world
                  of science
                </h1>
                <Link
                  className="hover:bg-[#349e85] block rounded-sm bg-[#40ba9b] text-center p-[1.2rem] text-white text-[1.2rem] mt-[1rem]"
                  href="/auth/p"
                >
                  Join for free
                </Link>
              </div>
            </div>
            <div className="hero-second">
              <Image src={HeroImage} alt="Hero Image"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="discover">
        <div className="discover__wrapper">
          <div className="discover-grid">
            <div className="discover-first">
              <Image src={DiscoverImage} />
            </div>
            <div className="discover-second">
              <div>
                <h1>Discover research</h1>
                <p>
                  Access over 160 million publication pages and stay up to date
                  with what's happening in your field.
                </p>

                <form>
                  <div>
                    <IoSearchOutline size={20} color="gray" />
                    <input type="text" placeholder="Search Publications" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="connect">
        <div className="connect__wrapper">
          <div className="connect-grid">
            <div className="connect-first">
              <h1>Connect with your scientific community</h1>
              <p>
                Share your research, collaborate with your peers, and get the
                support you need to advance your career.
              </p>
            </div>
            <div className="connect-second">
              <h1>VISIT TOPIC PAGES</h1>

              <div className="pages-link">
                {fields.map((item) => (
                  <Link
                    className="inline-block text-[#40ba9b] rounded-full text-[18px] border-[1px] border-[#40ba9b] py-[.7rem] px-[1rem]"
                    href="/"
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
