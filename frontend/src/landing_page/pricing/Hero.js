export default function Hero() {
  return (
    <div className="container text-center mt-5">
        <div className="row ">
            <h2>Charges</h2>
            <h5 className="text-muted mt-3 mb-5">List of all charges and taxes</h5>
          <div className="row mt-5">
              <div className="col-4 p-5">
                <img src="images/pricingEquity.svg"/>
                <h2 className="mb-5">Free equity delivery</h2>
                <p className="mt-5 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
             <div className="col-4 p-5">
                <img src="images/intradayTrades.svg"/>
                <h2 className="mb-1">Intraday and F&O trades</h2>
                <p className="mt-3 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
             <div className="col-4 p-5">
                <img src="images/pricingEquity.svg"/>
                <h2 className="mb-5">Free direct MF</h2>
                <p className="mt-5 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
    </div>
  )}