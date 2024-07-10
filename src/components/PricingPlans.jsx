const PricingPlans = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8">Passar stora och små</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Free</h3>
          <p className="text-lg mb-4">0 kr</p>
          <p className="mb-4">För privatpersoner och små företag med upp till 5 hyresobjekt.</p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded">Kom igång</button>
        </div>
        <div className="p-8 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <p className="text-lg mb-4">10 kr/hyresobjekt/månad</p>
          <p className="mb-4">För privata fastighetsägare upp till 100 hyresobjekt.</p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded">Kom igång</button>
        </div>
        <div className="p-8 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
          <p className="text-lg mb-4">Offer</p>
          <p className="mb-4">För fastighetsbolag eller förvaltare från 101 till tusentals hyresobjekt.</p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded">Kontakta oss</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;