import Link from "next/link";
import services from "../../data/services";
import type { Service } from "../../data/services";
import "./services.scss";

export default function ServicesPage() {
  return (
    <main className="services">
      <h1 className="services__title">Our Services</h1>
      <ul className="services__list">
        {services.map((service: Service) => (
          <li className="services__item" key={service.slug}>
            <Link href={`/services/${service.slug}`} className="services__link">
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
