import React from "react";
import { RiInfoCardLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
    <>
      <section className="bg-black  py-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 text-white">
          <div className="space-y-2">
            <img
              className="w-[302px] h-[62px]"
              src="https://bankingkhabar.com/wp-content/uploads/2022/08/logo1-1.jpg"
              alt=""
            />

            <ul className="text-white">
              <li className="flex items-center gap-2 mb-5 mt-1">
                <RiInfoCardLine />
                सूचना विभाग दर्ता नं : २९१/०७३-७४66
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                फोन नं : 9851215417, 9851215418
              </li>
              <li className="flex items-center gap-2">
                <CiMail /> समाचार : bankingkhabar72@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <CiMail /> विज्ञापन : bankingkhabaradv@gmail.com
              </li>
            </ul>
          </div>

           <div className="space-y-4 md:text-right">
          <div>
            <p className="font-semibold border-b inline pb-1">Chief Editor</p>
            <p className="mt-1">Madhav Nirdosh</p>
          </div>
          <div>
            <p className="font-semibold border-b inline pb-1">Coordinator</p>
            <p>Sandip B. K</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
