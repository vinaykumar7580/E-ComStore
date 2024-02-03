import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics store, we are dedicated to providing the latest
              and greatest devices and accessories to our customers. with a wide
              selection of phones, TVs, laptops, watches, and accessories.
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <FaFacebook size={"22px"} />
              </Link>
              <Link href="#">
                <RiInstagramFill size={"24px"} />
              </Link>
              <Link href="#">
                <FaYoutube size={"24px"} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={"24px"} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
