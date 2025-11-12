import React from 'react';
// Icon အသစ်များဖြစ်တဲ့ Telegram, TikTok, YouTube, Threads တို့ကို import လုပ်ပါ
import { FaFacebook, FaInstagram, FaEnvelope, FaTelegramPlane, FaTiktok, FaYoutube, FaLine, FaViber } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6'; // Threads icon က fa6 set ထဲမှာရှိပါတယ်

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">TGI Japanese Language School</h3>
          <p className="mb-6">Your next adventure starts here.</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-5 mb-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61559381889759" // Facebook link အမှန်ထည့်ပါ
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://t.me/your-channel" // Telegram link အမှန်ထည့်ပါ
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@tgi.nihongo.gakkou" // TikTok link အမှန်ထည့်ပါ
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@tgijapaneselanguageschool7276" // YouTube link အမှန်ထည့်ပါ
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a 
              href="mailto:pyitheinsoe.japan@gmail.com" // Email လိပ်စာအမှန်ထည့်ပါ
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              &copy; {2019} TGI Japanese Language School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;