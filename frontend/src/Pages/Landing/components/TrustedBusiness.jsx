import Card from "../../../Components/CardSimple/Card";

function TrustedBusiness({ businessList }) {
  return (
    <div className="mt-10" data-aos="fade-up" >
      <h2 className="text-[40px] font-bold text-[min(10vw,40px)] text-center">
        Trusted by 10,000+ Businesses
      </h2>
      <div className="grid grid-cols-3 gap-5 mx-10 my-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 mt-5">
        {businessList.map((business, index) => (
          <Card business={business} />
        ))}
      </div>
    </div>
  );
}

export default TrustedBusiness;
