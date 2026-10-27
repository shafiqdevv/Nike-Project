// import {
//   FaFacebookF,
//   FaInstagram,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";
// import { SiNike } from "react-icons/si";

// function Footer() {
//   return (
//     <footer className="relative bg-black text-white overflow-hidden h-70">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-[url('/foote.png')] bg-cover bg-center"
//       />
//       <img src="footer.png" alt="" className="absolute"/>
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bgblack/75" />

//       {/* Footer Content */}
//       <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 pb-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/20 pb-12">
//           {/* Brand */}
//           <div>
//             <SiNike className="text-6xl mb-5" />

//             <h2 className="text-3xl font-black uppercase italic">
//               JUST DO IT.
//             </h2>

//             <p className="text-gray-300 text-sm mt-4 leading-6 max-w-xs">
//               Move with confidence. Push your limits. Discover your next
//               favorite Nike style.
//             </p>

//             <div className="flex gap-4 mt-6">
//               <a href="#" className="hover:text-gray-400 transition">
//                 <FaFacebookF size={19} />
//               </a>
//               <a href="#" className="hover:text-gray-400 transition">
//                 <FaInstagram size={19} />
//               </a>
//               <a href="#" className="hover:text-gray-400 transition">
//                 <FaXTwitter size={19} />
//               </a>
//               <a href="#" className="hover:text-gray-400 transition">
//                 <FaYoutube size={19} />
//               </a>
//             </div>
//           </div>

//           {/* Get Help */}
//           <div>
//             <h3 className="font-bold uppercase tracking-wider mb-5">
//               Get Help
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition">Order Status</a></li>
//               <li><a href="#" className="hover:text-white transition">Shipping & Delivery</a></li>
//               <li><a href="#" className="hover:text-white transition">Returns</a></li>
//               <li><a href="#" className="hover:text-white transition">Payment Options</a></li>
//               <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* About Nike */}
//           <div>
//             <h3 className="font-bold uppercase tracking-wider mb-5">
//               About Nike
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition">About Us</a></li>
//               <li><a href="#" className="hover:text-white transition">News</a></li>
//               <li><a href="#" className="hover:text-white transition">Careers</a></li>
//               <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
//               <li><a href="#" className="hover:text-white transition">Purpose</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="font-bold uppercase tracking-wider mb-5">
//               Stay In The Game
//             </h3>

//             <p className="text-sm text-gray-300 leading-6 mb-5">
//               Get the latest drops, new collections, and exclusive updates.
//             </p>

//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="flex border border-white/40 rounded-full overflow-hidden"
//             >
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full min-w-0 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400"
//               />

//               <button
//                 type="submit"
//                 className="bg-white text-black px-5 font-bold text-sm hover:bg-gray-300 transition"
//               >
//                 JOIN
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7 text-xs text-gray-400">
//           <p>© {new Date().getFullYear()} Nike. All rights reserved.</p>

//           <div className="flex flex-wrap justify-center gap-5">
//             <a href="#" className="hover:text-white transition">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-white transition">
//               Terms of Use
//             </a>
//             <a href="#" className="hover:text-white transition">
//               Cookie Settings
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;

import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Solutions',
      links: ['Marketing', 'Analytics', 'Commerce', 'Insights'],
    },
    {
      title: 'Support',
      links: ['Pricing', 'Documentation', 'Guides', 'API Status'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Jobs', 'Press', 'Partners'],
    },
    {
      title: 'Legal',
      links: ['Claim', 'Privacy', 'Terms'],
    },
  ];

  const socialLinks = [
    { icon: BsFacebook, href: '#', label: 'Facebook' },
    { icon: BsInstagram, href: '#', label: 'Instagram' },
    { icon: BsTwitter, href: '#', label: 'Twitter' },
    { icon: BsGithub, href: '#', label: 'GitHub' },
    { icon: BsYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Newsletter Section */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-xl font-bold text-white tracking-wide">BRANDLOGO</span>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a key={index} href={item.href} className="text-gray-500 hover:text-gray-400">
                    <span className="sr-only">{item.label}</span>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="mt-5 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{footerLinks[0].title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[0].links.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{footerLinks[1].title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[1].links.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{footerLinks[2].title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[2].links.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{footerLinks[3].title}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[3].links.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-5 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {currentYear} BRANDLOGO Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
