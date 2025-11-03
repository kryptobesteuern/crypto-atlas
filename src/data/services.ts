// Crypto service data for the European Crypto Atlas
// Each category contains services with their details

export interface Service {
  name: string;
  description: string;
  icon: string;
  country: string;
  hq?: string;
  legal?: string;
  link: string;
  addedDate?: string; // ISO date string when the service was added (YYYY-MM-DD)
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: 'exchanges',
    name: 'Exchanges',
    icon: '💱',
    color: 'bg-[#3B82F6]',
    services: [
      {
        name: 'Bitstamp',
        description:
          'One of the longest-running cryptocurrency exchanges offering secure trading for Bitcoin and major altcoins',
        icon: '🔷',
        country: '🇱🇺',
        link: 'https://www.bitstamp.net/',
      },
      {
        name: 'Bitpanda',
        description:
          'Austrian cryptocurrency broker offering crypto, stocks, and precious metals trading',
        icon: '🐼',
        country: '🇦🇹',
        link: 'https://www.bitpanda.com/',
      },
      {
        name: 'Bitcoin.de',
        description:
          "Germany's leading Bitcoin marketplace with direct peer-to-peer trading",
        icon: '₿',
        country: '🇩🇪',
        link: 'https://www.bitcoin.de/',
      },
    ],
  },
  {
    id: 'wallets',
    name: 'Wallets',
    icon: '👛',
    color: 'bg-[#4CAF50]',
    services: [
      {
        name: 'Ledger',
        description:
          'Hardware wallet manufacturer providing secure cold storage solutions for cryptocurrencies',
        icon: '🔐',
        country: '🇫🇷',
        link: 'https://www.ledger.com/',
      },
      {
        name: 'Trezor',
        description:
          'Czech-made hardware wallet offering secure Bitcoin and cryptocurrency storage',
        icon: '🛡️',
        country: '🇨🇿',
        link: 'https://trezor.io/',
      },
    ],
  },
  {
    id: 'defi',
    name: 'DeFi',
    icon: '🏦',
    color: 'bg-[#9C27B0]',
    services: [
      {
        name: 'Nexo',
        description:
          'Digital asset lending platform offering crypto-backed loans and interest-earning accounts',
        icon: '💰',
        country: '🇧🇬',
        link: 'https://nexo.io/',
      },
      {
        name: 'Crypto.com',
        description:
          'Multi-service platform offering DeFi wallet, exchange, and Visa card with crypto rewards',
        icon: '💎',
        country: '🇲🇹',
        link: 'https://crypto.com/',
      },
    ],
  },
  {
    id: 'payment',
    name: 'Payment Solutions',
    icon: '💳',
    color: 'bg-[#6A4C93]',
    services: [
      {
        name: 'Crypto.com',
        description:
          'Visa debit card allowing spending of cryptocurrencies with cashback rewards',
        icon: '💳',
        country: '🇲🇹',
        link: 'https://crypto.com/cards',
      },
    ],
  },
  {
    id: 'mining',
    name: 'Mining & Staking',
    icon: '⛏️',
    color: 'bg-[#00A8A8]',
    services: [
      {
        name: 'Northern Data',
        description:
          'High-performance computing infrastructure provider for Bitcoin mining and data centers',
        icon: '🖥️',
        country: '🇩🇪',
        link: 'https://northerndata.de/',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics & Data',
    icon: '📊',
    color: 'bg-[#FF7F50]',
    services: [],
  },
  {
    id: 'nft',
    name: 'NFT Marketplaces',
    icon: '🎨',
    color: 'bg-[#FFD166] text-[#333333]',
    services: [],
  },
  {
    id: 'custody',
    name: 'Custody Solutions',
    icon: '🔒',
    color: 'bg-[#FF9800]',
    services: [],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: '🖥️',
    color: 'bg-[#4361EE]',
    services: [],
  },
  {
    id: 'research',
    name: 'Research & Education',
    icon: '📚',
    color: 'bg-[#7B61FF]',
    services: [
      {
        name: 'Krypto-besteuern.de',
        description:
          'Krypto-besteuern.de is a platform for cryptocurrency taxation in Germany.',
        icon: '🚀',
        country: '🇩🇪',
        link: 'https://krypto-besteuern.de/',
      },
      {
        name: 'Blockchain Research Lab',
        description:
          'Academic research institution studying blockchain technology and cryptocurrencies',
        icon: '🔬',
        country: '🇩🇪',
        link: 'https://blockchain-research-lab.org/',
      },
      {
        name: 'Frankfurt School Blockchain Center',
        description:
          'Think tank and research center focusing on blockchain technology implications',
        icon: '🎓',
        country: '🇩🇪',
        link: 'https://www.fs-blockchain.de/',
      },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy Coins',
    icon: '🔏',
    color: 'bg-[#45B7D1]',
    services: [],
  },
  {
    id: 'security',
    name: 'Security & Auditing',
    icon: '🛡️',
    color: 'bg-[#4A90E2]',
    services: [
      {
        name: 'Hacken',
        description:
          'Cybersecurity services specializing in blockchain security audits and pentesting',
        icon: '🛡️',
        country: '🇪🇪',
        link: 'https://hacken.io/',
      },
    ],
  },
  {
    id: 'trading',
    name: 'Trading Tools',
    icon: '📈',
    color: 'bg-[#FF6B6B]',
    services: [
      {
        name: '3Commas',
        description:
          'Automated trading platform with bots, smart trading, and portfolio management',
        icon: '🤖',
        country: '🇪🇪',
        link: 'https://3commas.io/',
      },
    ],
  },
  {
    id: 'gaming',
    name: 'Gaming & Metaverse',
    icon: '🎮',
    color: 'bg-[#9333EA]',
    services: [
      {
        name: 'The Sandbox',
        description:
          'Virtual world where players can build, own, and monetize gaming experiences',
        icon: '🏝️',
        country: '🇫🇷',
        link: 'https://www.sandbox.game/',
      },
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance & Regulation',
    icon: '⚖️',
    color: 'bg-[#2563EB]',
    services: [
      {
        name: 'Chainalysis',
        description:
          'Blockchain data platform for compliance, investigation, and market intelligence',
        icon: '🔎',
        country: '🇩🇰',
        link: 'https://www.chainalysis.com/',
      },
    ],
  },
  {
    id: 'launchpads',
    name: 'Launchpads & ICO',
    icon: '🚀',
    color: 'bg-[#8B5CF6]',
    services: [],
  },
];
