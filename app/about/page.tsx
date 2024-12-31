import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-gray-200 bg-fixed bg-black bg-center bg-cover font-samo" style={{ backgroundImage: "url('/assets/new-gradient.jpg')" }}>
      <nav className="flex items-center justify-center w-full bg-none">
        <div className="flex flex-col items-center justify-between w-full max-w-6xl px-4 md:flex-row">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={192} height={48} className="pt-2 max-w-48 lg:max-w-48" />
          </Link>
          <div className="[&>a]:inline [&>a]:text-xs">
            <Link href="/" className="px-1 py-1 font-semibold md:text-base text-gray-500 hover:text-lime-500">
              Home
            </Link>
            <Link href="/about" className="px-1 py-1 text-gray-500 transition duration-300 md:text-base text-lime-500 border-lime-500 border-b-2">
              About
            </Link>
            <Link href="/about#support" className="px-1 py-1 text-gray-500 transition duration-300 md:text-base hover:text-lime-500">
              Support
            </Link>
          </div>
        </div>
      </nav>

      <div id="main" className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl p-4">
          <div className="space-x-1 text-xs font-bold text-center lowercase text-lime-500 md:text-sm font-samo">
            <Link href="#why">Why</Link>
            ·
            <Link href="#listings">About listings</Link>
            ·
            <Link href="#support">Support</Link>
            ·
            <Link href="#contact">contact</Link>
            ·
            <Link href="#comments">comments</Link>
            ·
            <Link href="#transparency">transparency</Link>
            ·
            <Link href="#privacy">privacy</Link>
            ·
            <Link href="#disclaimer">disclaimer</Link>
          </div>
        </div>

        <article className="max-w-5xl [&>div]:px-4 [&>div]:py-1 font-inter">
          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="why" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              why dtcnot.me?
            </h2>
            <p className="text-gray-200">
              Since the advent of digital products, instances of fraudulent activity have persistently emerged. Consequently, our purpose is to provide guidance on identifying reliable and legitimate offerings within this domain.
            </p>
            <p className="text-gray-200">
              We carry out daily evaluations of all relevant information pertaining to each product to ensure their reliability.
            </p>
            <p className="text-gray-200">
              We aspire to offer individuals reliable alternatives for purchasing cheats.
            </p>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="listings" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M7 7h10"/>
                <path d="M7 12h10"/>
                <path d="M7 17h10"/>
              </svg>
              listings
            </h2>
            <h3 id="listing-process" className="text-lime-500">listing process</h3>
            <p className="text-gray-200">
              The listing process is usually slow. I first need to review the cheat,
              read online reviews, gather evidence and history of good reviews /
              opinions, test it myself (i can't always do this), read the terms of
              service, privacy policy, etc...
            </p>
            <p className="text-gray-200">
              I do this on my own free time, so I'm slow at it. If you feel like a cheat
              deserves to be listed, you can <a href="#contact"> contact me</a> and I will try to speed up the review
              process.
            </p>

            <h3 id="attributes" className="text-lime-500">what is an attribute?</h3>
            <p className="text-gray-200">
              An attribute is a feature that a cheat has. An attribute can be either
              good, a warning, bad or informational. Attributes are not limited, the
              list of attributes will grow if needed, you can see a full list of the
              attributes available on the Attributes page.
            </p>
            <p className="text-gray-200">
              You can click on any point to see a detailed description of what it
              means. The point page also shows all the listings that have that point.
              This is also a useful way to find listings that have a specific feature.
            </p>

            <h3 id="scoring" className="text-lime-500">scoring</h3>
            <p className="text-gray-200">
              Each listing has a score that is calculated based on the attributes that
              it has. The score does not reflect how good a cheat is overall, but
              it seeks to give a score in relation to its practices. A cheat
              could have an awful UI/UX, but if it is very undetected, it will
              still get a high score.
            </p>

            <h3 id="order" className="text-lime-500">order</h3>
            <p className="text-gray-200">
              The listings are sorted in a decreasing order by score. For listings
              that share the same score (tie), the order is random every time within
              that score range.
            </p>

            <h3 id="verification" className="text-lime-500">verification</h3>
            <p className="text-gray-200 mt-2">
              You will see that some cheats show a blue badge with a tick. This
              means that the cheat has been tested personally by me.
            </p>
            <p className="text-gray-200 mt-2">
              To check the cheat, I test the cheat manually. With this, I can verify that the cheat is undetected, and that it is not a scam, at least at the
              time of the verification.
            </p>
            <p className="text-gray-200 mt-2">
              These checks are done randomly and without prior notice to the provider.
              For this reason, and as the list is in constant growth, not all cheats
              have been verified yet and it takes me some time to verify them.
            </p>
            <p className="text-gray-200 mt-2">
              A verified cheat does not mean that the cheat is safe to use
              blindly, it just means that at the time of the verification, the cheat
              was not detected, and that it was not a
              scam. It is still recommended to do your own research before using any
              cheat, since I can't test all the cheats frequently enough.
            </p>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="support" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
                <path d="M12 12v3"/>
                <path d="M12 8h.01"/>
              </svg>
              support this project
            </h2>
            <div className="[&>span]:block space-y-6">
              <span>
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 bitcoin-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4 2.66a1 1 0 0 0 -1 1h-1a1 1 0 0 0 -2 0a1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167 -.394 2 -1.527 2 -2.85l-.005 -.175a3.063 3.063 0 0 0 -.734 -1.827c.46 -.532 .739 -1.233 .739 -1.998c0 -1.323 -.833 -2.456 -2 -2.85v-.15a1 1 0 0 0 -1 -1zm.09 7c.492 0 .91 .437 .91 1s-.418 1 -.91 1h-2.09v-2h2.09zm0 -4c.492 0 .91 .437 .91 1c0 .522 -.36 .937 -.806 .993l-.104 .007h-2.09v-2h2.09z" strokeWidth="0" fill="currentColor"></path>
                  </svg>
                  <span>
                    <span className="font-bold uppercase">Bitcoin</span>
                  </span>
                </span>
                <p className="mt-1 text-xs text-white/50">
                  &gt; If you want to donate without Silent Payments, request an address via any of the <a href="#contact">contact</a> methods.
                </p>
                <code>bc1qa78wsjjm2mg9dge7rzlhnt89t2fzwu0q5fez6j</code>
              </span>
              <span className="pb-4 space-y-2"></span>
            </div>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="contact" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              contact
            </h2>
            <p className="text-gray-200">
              If you have any queries or concerns, you can connect with me on any of the listed social media
              platforms below.
            </p>
            <div className="[&>span]:block [&>span>a]:!no-underline [&>span>a]:font-bold space-y-2">
              <span>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/dtcnot">Discord</a>
              </span>
              <span>
                <a target="_blank" rel="noreferrer" href="https://x.com/dtcnot">Twitter (X)</a>
              </span>
            </div>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="comments" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              comments
            </h2>
            <p className="text-gray-200">
              Each service has a dedicated comments section. The comments are suppored
              by a self-hosted instance of <a rel="no-referrer" target="_blank" href="https://utteranc.es/">Utteranc</a>. An open-source and lightweight (20kb) commenting engine.
            </p>
            <p className="text-gray-200">
              To comment on a service's page, you can log in with Github. Anonymous comments are also possible, but these need to be approved before being public to avoid abuse.
            </p>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="transparency" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              transparency
            </h2>
            <p className="text-gray-200">
              In order to increase trust from visitors, DTCNOT.me strives to be as
              transparent as possible. Here are some of the ways in which I try to
              achieve this:
            </p>
            <div className="[&>span]:block space-y-2">
              <span className="text-gray-200">
                * Comment section on each page, available on a self-hosted <a href="https://utteranc.es/">Utteranc</a> instance.
              </span>
              <span className="text-gray-200">* See any service's score breakdown: <a href="https://dtcnot.me/wannacry">wannacry example</a></span>
              <span className="text-gray-200">* Open API to get all the listings data</span>
              <span className="text-gray-200">
                * Open scoring algorithm. All services go under the same algorithm,
                meaning that the score is not subjective.
              </span>
              <span className="text-gray-200">* Test proofs: I am slowly adding proofs for each verified service, providing a PGP signed proof that I have personally tested the service. To see a proof, click the "verified" badge next to a serivce's name, inside the service page.</span>
            </div>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="privacy" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              privacy
            </h2>
            <p className="text-gray-200">
              DTCNOT.me does not have trackers and never will. It does not make any
              third party connections from the frontend. No user data of any kind is
              collected. A "no-referrer" policy is enforced.
            </p>
          </div>

          <div className="m-2 rounded-xl bg-gray-700 bg-opacity-30 backdrop-blur-md">
            <h2 id="disclaimer" className="font-bold text-lime-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              disclaimer
            </h2>
            <p className="text-gray-200">
              This website does not provide any financial advice. Always do your
              own research before using any service. This site is for informational
              purposes only. I'm not responsible for any loss of funds or any other
              damage that may occur by using any of the services listed here. Use at
              your own risk.
            </p>
          </div>
        </article>
      </div>

      <footer className="my-6 space-x-4 text-md text-center *:text-lime-600">
        <Link href="https://x.com/dtcnot" className="hover:text-lime-300">x</Link>
        <Link href="https://discord.gg/dtcnot" className="hover:text-lime-300">discord</Link>
        <Link href="https://t.me/dtcnot/" className="hover:text-lime-300">telegram</Link>
      </footer>
      <br></br>
    </div>
  );
}

