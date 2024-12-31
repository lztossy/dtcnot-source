Hello everyone, you're probably wondering why this is leaked.

The original owner rzr1931 (also known as starhook, r4ave, rave1337) has scammed multiple users, and one has come to light.
Rzr had used a browser utility to scrape the source code of a popular website https://kycnot.me/ and deployed it to the public, taking credit for writting it and the UIX

How did I get into this scandal? 
[+] Shortly after the release, I had audited the website, and noticed that not only it was terrible, exploitable, and just really badly organized. I contacted the owner to let him know of the issue, this led to me re-writting the entire source code in nextjs/typescript
adding security, load balancing, mitigation & basic cloudflare precautions. 

Why is this getting leaked?
I have no respect for scammers, especially those who strive to lead a community based on truthworthynewss and reputation. So here I am leaking the source so the future of DTCNOT ceases to exist.

Deployment
```
git clone https://github.com/lztossy/dtcnot-source
cd dtcnot-source
```
```
npm install
# or
yarn install
```
npm run dev
# or
yarn dev
```
