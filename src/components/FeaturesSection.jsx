import React from 'react';
import "../styles.css"

function FeaturesSection() {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  return (
    <section style={sectionStyle}>
      <h4 className="disptextz" id="features" style={{ fontSize: '1em', fontWeight: 'bolder' }}>
        FEATURES
      </h4>
      <div className="tabswithdesc">
        <div className="tabs">
          <button className="tabbutton" data-target="desc1">
            <div className="tab">
              <div className="headline">Low-Interest personal health loans</div>
              <div className="description">
                Access affordable financing options for medical treatments through our partnership with major banks
              </div>
            </div>
          </button>
          <button className="tabbutton" data-target="desc2">
            <div className="tab">
              <div className="headline">Streamlined Loan Application</div>
              <div className="description">
                Our user-friendly platform simplifies the application process, reducing paperwork and minimizing manual errors.
              </div>
            </div>
          </button>
          <button className="tabbutton" data-target="desc3">
            <div className="tab">
              <div className="headline">Expedited Loan Approval</div>
              <div className="description">Experience prompt loan approvals, ensuring timely access to the funds you need for medical expenses.</div>
            </div>
          </button>
          <button className="tabbutton" data-target="desc4">
            <div className="tab">
              <div className="headline">Cashless Treatment Integration</div>
              <div className="description">
                Enjoy the convenience of cashless treatment by seamlessly coordinating with our partnered hospitals and financial institutions.
              </div>
            </div>
          </button>
        </div>
        <div className="desc">
          <div className="descriptionContent" id="desc1">
            <div className="headlinee">Personal Health Loans</div>
            <div className="descriptionn">
              Access affordable financing options for medical treatments through our partnership with major banks
            </div>
          </div>
          <div className="descriptionContent" id="desc2">
            <div className="headlinee">Streamlined Loan Application</div>
            <div className="descriptionn">
              Our user-friendly platform simplifies the application process, reducing paperwork and minimizing manual errors.
            </div>
          </div>
          <div className="descriptionContent" id="desc3">
            <div className="headlinee">Expedited Loan Approval</div>
            <div className="descriptionn">
              Experience prompt loan approvals, ensuring timely access to the funds you need for medical expenses.
            </div>
          </div>
          <div className="descriptionContent" id="desc4">
            <div className="headlinee">Cashless Treatment Integration</div>
            <div className="descriptionn">
              Enjoy the convenience of cashless treatment by seamlessly coordinating with our partnered hospitals and financial institutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
