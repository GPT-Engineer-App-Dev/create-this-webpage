const DetailedFeaturesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Det här får du med TenFAST</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="/images/feature-avtalskapare.png" alt="Avtalskapare med mallar" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Avtalskapare med mallar</h3>
        </div>
        <div>
          <img src="/images/feature-hyresgast-inloggning.png" alt="Hyresgäst inloggning" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Hyresgäst inloggning</h3>
        </div>
        <div>
          <img src="/images/feature-bostadsko.png" alt="Bostadskö" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Bostadskö</h3>
        </div>
        <div>
          <img src="/images/feature-bokforing.png" alt="Bokföring" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Bokföring</h3>
        </div>
        <div>
          <img src="/images/feature-statistik.png" alt="Statistik" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Statistik</h3>
        </div>
        <div>
          <img src="/images/feature-felanmalan.png" alt="Felanmälan" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Felanmälan</h3>
        </div>
        <div>
          <img src="/images/feature-automatiska-inbetalningar.png" alt="Automatiska inbetalningar" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Automatiska inbetalningar</h3>
        </div>
        <div>
          <img src="/images/feature-oppet-api.png" alt="Öppet API" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Öppet API</h3>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;