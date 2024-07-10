const ClientLogos = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Några nöjda kunder</h2>
      <div className="flex justify-center space-x-8">
        <img src="/images/client-logo-mora.png" alt="Mora Kommun" className="h-12" />
        <img src="/images/client-logo-lanet.png" alt="Länet" className="h-12" />
        <img src="/images/client-logo-brickhouse.png" alt="Brick House" className="h-12" />
        <img src="/images/client-logo-hedins.png" alt="Hedins Fastigheter" className="h-12" />
      </div>
    </section>
  );
};

export default ClientLogos;