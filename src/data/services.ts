export type Service = {
  name: string;
  slug: string;
  description: string;
};

const services: Service[] = [
  {
    name: 'Roof Repair',
    slug: 'roof-repair',
    description: 'Professional roof repair services for leaks, damage, and wear.'
  },
  {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    description: 'Complete roof replacement with high-quality materials.'
  },
  {
    name: 'Gutter Installation',
    slug: 'gutter-installation',
    description: 'Expert gutter installation to protect your home.'
  }
];

export default services; 