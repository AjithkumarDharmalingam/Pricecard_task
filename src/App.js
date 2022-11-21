import Card from "./component/Card";
function App() {
  let plans = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false

    },
    {
      plan:"PLUS",
      price:9,
      user:"5 User",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited User",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:" Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    },
  ]
  return <div>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     <Card data={plans[0]}/>
     <Card data={plans[1]}/>
     <Card data={plans[2]}/>
    </div>
  </div>
</section>
  </div>
}

export default App;
