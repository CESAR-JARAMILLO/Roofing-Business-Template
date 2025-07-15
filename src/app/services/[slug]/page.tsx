import { notFound } from "next/navigation";
import services from "../../../data/services";
import "../services.scss";

interface ServiceParams {
  params: { slug: string };
}

export default async function ServiceDetailPage({ params }: ServiceParams) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main className="services services--detail">
      <h1 className="services__title">{service.name}</h1>
      <p className="services__description">{service.description}</p>
    </main>
  );
}
