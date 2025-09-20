export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Bienvenue 👋</h1>
      <p>Votre plateforme de commande — Daada Fast Food.</p>
      <a
        href="/(customer)/menu"
        className="inline-block rounded-xl border px-4 py-2 hover:bg-gray-50"
      >
        Voir le menu
      </a>
    </section>
  );
}
