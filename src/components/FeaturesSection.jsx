const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8">Fastighetssystemet för din verksamhet</h2>
      <p className="text-lg mb-8">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/images/feature-webbaserat.png" alt="Webbaserat" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Webbaserat</h3>
        </div>
        <div>
          <img src="/images/feature-enkel-prissattning.png" alt="Enkel prissättning" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Enkel prissättning</h3>
        </div>
        <div>
          <img src="/images/feature-automatisera.png" alt="Automatisera din verksamhet" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Automatisera din verksamhet</h3>
        </div>
        <div>
          <img src="/images/feature-allt-i-ett.png" alt="Allt i ett" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Allt i ett</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;