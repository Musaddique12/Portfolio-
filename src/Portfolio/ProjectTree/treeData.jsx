import { FaReact, FaFire, FaFileInvoiceDollar } from "react-icons/fa";
import { SiWeb3Dotjs, SiFirebase } from "react-icons/si";

const treeData = [
  {
    title: "Crypto Tracker (React Basics)",
    description: "My first React project displaying live cryptocurrency prices using CoinGecko API.",
    tools: ["React", "API Integration", "Hooks"],
    icon: <FaReact className="text-cyan-400" />,
    live: "https://crypto-tracker-sigma-two.vercel.app/",
    github: "https://github.com/Musaddique12/Crypto-Tracker",
  },
  {
    title: "Quiz App (Firebase Auth)",
    description: "Integrated Firebase authentication & Firestore in a dynamic quiz game.",
    tools: ["React", "Firebase Auth", "Firestore"],
    icon: <SiFirebase className="text-orange-400" />,
    live: "https://quiz-ruby-delta.vercel.app/",
    github: "https://github.com/Musaddique12/Quiz",
  },
  {
    title: "Invoice Builder",
    description: "Built a bill/invoice system to generate, add, and manage products using React.",
    tools: ["React", "Hooks", "State Management"],
    icon: <FaFileInvoiceDollar className="text-green-300" />,
    live: "https://invoice-builder-zeta.vercel.app/",
    github: "https://github.com/Musaddique12/invoice-builder",
  },
  {
    title: "HypeCoin (Web3 + Wallet)",
    description: "Built a Web3 DApp with wallet creation, HPC token, referral & swap system.",
    tools: ["React", "Web3", "Ethers.js", "CoinGecko API"],
    icon: <SiWeb3Dotjs className="text-green-400" />,
    live: "https://crypto-earning.vercel.app/",
    github: "https://github.com/Musaddique12/Crypto-earning-",
  },
  {
    title: "LibroX (Full Firebase App)",
    description: "Book manager with Firebase Auth, Firestore database, and hosting.",
    tools: ["React", "Firebase", "Firestore", "Hosting"],
    icon: <FaFire className="text-orange-400" />,
    live: "https://libro-x.vercel.app/",
    github: "https://github.com/Musaddique12/LibroX",
  },
];

export default treeData;
