import { ProviderType, Game } from '@/types/games'

export interface Provider {
  href: string
  image: string
  title: string
  description: string
  type: ProviderType
  games: Game[]  
  verified?: boolean
  count?: number
}

export const providers: Provider[] = [
  {
    href: "/implicity",
    image: "/assets/implicity.webp",
    title: "Implicity",
    description: "Slotted, easy and exclusive Fortnite cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["FORTNITE", "RUST"],  
    verified: true,
    count: 10
  },

  {
    href: "/chaos",
    image: "/assets/chaos.webp",
    title: "Chaos",
    description: "Application based, and secure cheat. Popular and well-regarded.",
    type: "SOFTWARE",
    games: ["FORTNITE"],  
    verified: true,
    count: 10
  },
  
  {
    href: "/blurred",
    image: "/assets/blurred.webp",
    title: "Blurred",
    description: "Invite only, easy and affordable Fortnite cheat. Trusted by many.",
    type: "DMA",
    games: ["FORTNITE"],  
    verified: true,
    count: 10
  },

  {
    href: "/reported",
    image: "/assets/reported.webp",
    title: "Reported",
    description: "Reliable, effective, and secure temporary spoofer. Well-liked.",
    type: "SPOOFER",
    games: ["FORTNITE", "RUST", "APEX LEGENDS"],  
    verified: true,
    count: 10
  },

  {
    href: "/dopamine",
    image: "/assets/dopamine.jpg",
    title: "Dopamine",
    description: "Trustworthy, efficient, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["RUST"],  
    verified: true,
    count: 10
  },

  {
    href: "/sickkservices",
    image: "/assets/sickk.png",
    title: "Sickk",
    description: "Reliable, effective, and secure permanent spoofer. Well-liked.",
    type: "SPOOFER",
    games: ["FORTNITE", "CALL OF DUTY"],  
    verified: true,
    count: 10
  },

  {
    href: "/verse",
    image: "/assets/verse.webp",
    title: "Verse",
    description: "Reliable, effective, and secure permanent spoofer. Well-liked.",
    type: "SPOOFER",
    games: ["FORTNITE", "CALL OF DUTY", "RUST"],  
    verified: true,
    count: 10
  },
  
  {
    href: "/chudvision",
    image: "/assets/chudlogo.jpg",
    title: "Chudvision",
    description: "Trustworthy, easy, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["RUST"],  
    verified: true,
    count: 10
  },

  {
    href: "/foxyz",
    image: "/assets/foxyz.png",
    title: "Foxyz",
    description: "Trustworthy, efficient, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["APEX LEGENDS", "DAYZ"],  
    verified: true,
    count: 10
  },

  {
    href: "/nextcheat",
    image: "/assets/nc.png",
    title: "NextCheat",
    description: "Trustworthy, efficient, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["ESCAPE FROM TARKOV"],  
    verified: true,
    count: 10
  },
  
  {
    href: "/atomic",
    image: "/assets/atomic.png",
    title: "Atomic",
    description: "Trustworthy, efficient, and secure DMA cheat. Highly regarded.",
    type: "DMA",
    games: ["RUST"],  
    verified: true,
    count: 10
  },  



  {
    href: "/aimboss",
    image: "/assets/aimboss.png",
    title: "AimBoss",
    description: "Invite only, efficient, and secure cheat. Well-regarded.",
    type: "SOFTWARE",
    games: ["APEX LEGENDS"],  
    verified: true,
    count: 10
  },

  {
    href: "/zsoftware",
    image: "/assets/zsoftware.jpg",
    title: "ZSoftware",
    description: "Trustworthy, user-friendly, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["DAYZ"],  
    verified: true,
    count: 10
  },

  {
    href: "/phantomoverlay",
    image: "/assets/po.jpg",
    title: "PhantomOverlay",
    description: "Trustworthy, user-friendly, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["CALL OF DUTY"],  
    verified: true,
    count: 10
  },

  {
    href: "/proofcore",
    image: "/assets/proofcore.jpg",
    title: "Proofcore",
    description: "Private, user-friendly, and secure cheat. Verification required.",
    type: "SOFTWARE",
    games: ["DAYZ", "CALL OF DUTY"],  
    verified: true,
    count: 10
  },

  {
    href: "/ring-1",
    image: "/assets/ring1.png",
    title: "Ring-1",
    description: "Trust-worthy, user-friendly, and secure cheat.",
    type: "SOFTWARE",
    games: ["PUBG"],  
    verified: true,
    count: 10
  },

  {
    href: "/wyvern",
    image: "/assets/wyvern.jpg",
    title: "Wyvern",
    description: "Trustworthy, easy, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["OVERWATCH 2"],  
    verified: true,
    count: 10
  },

  {
    href: "/desync",
    image: "/assets/zhex.jpg",
    title: "Desync",
    description: "Trustworthy, efficient, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["ESCAPE FROM TARKOV", "PUBG"],  
    verified: true,
    count: 10
  },

  {
    href: "/hackmachine",
    image: "/assets/hmachine.webp",
    title: "Hackmachine",
    description: "Trustworthy, efficient, and secure cheat. Highly regarded.",
    type: "SOFTWARE",
    games: ["ESCAPE FROM TARKOV"],  
    verified: true,
    count: 10
  },


]

