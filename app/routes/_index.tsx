import type { MetaFunction } from "@remix-run/node";
import Timeline from "~/components/Timeline";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[44px] font-bold text-center m-8">Historia de la Moda: Una Pasarela a Través del Tiempo</h1>
      <p className="text-center max-w-[50%] mx-auto">¡Bienvenidos, fashionistas curiosos! Prepárense para un viaje épico por la historia de la moda, donde exploraremos cómo las togas romanas, los corsés medievales y las hombreras ochenteras moldearon nuestros armarios. Desde los emperadores romanos hasta los diseñadores futuristas, cada época nos dejó una huella estilística única. Así que abróchense los cinturones de diseño y acompáñennos en esta pasarela del tiempo, donde aprenderemos y nos reiremos de las decisiones de moda más audaces y extravagantes.</p>
      <Timeline />
    </div>
  );
}
