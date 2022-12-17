import React from 'react'

function Sidebar() {
  return (
    <div className='filter'>
      <div className="filtercategories">
        <div className='filterbox'>
          <div className='heading'>Related Category</div>
          <div className='lists'>
            <ul className='listbox'>
              <li className='listitem'>
                <span>Paracetamol Tablets</span>
              </li>
              <li className='listitem'>
                <span>Paracetamol Syrup</span>
              </li>
              <li className='listitem'>
                <span>Paracetamol Powder</span>
              </li>
              <li className='listitem'>
                <span>Aceclofenac</span>
              </li>
              <li className='listitem'>
                <span>Magaladrate Simethicone Oral Suspension</span>
              </li>
              <li className='listitem'>
                <span>Mefenamic Paracetamol Syrup</span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className='filterbox'>
          <div className='heading'>Related Brands</div>
          <div className='lists'>
            <ul className='listbox'>
              <li className='listitem'>
                <span>Cipmol Paracetamol</span>
              </li>
              <li className='listitem'>
                <span>Pandal Paracetamol Tablets</span>
              </li>
              <li className='listitem'>
                <span>Combiflam</span>
              </li>
              <li className='listitem'>
                <span>Crocin Tablets</span>
              </li>
              <li className='listitem'>
                <span>Calpol Paracetamol</span>
              </li>
              <li className='listitem'>
                <span>Sumo Tablet</span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className='filterbox'>
          <div className='heading'>Business Type</div>
          <div className='lists'>
            <ul className='listbox'>
              <li className='listitem'>
                <span>Wholesaler</span>
              </li>
              <li className='listitem'>
                <span>Manufacturer</span>
              </li>
              <li className='listitem'>
                <span>Retailer</span>
              </li>
              <li className='listitem'>
                <span>Exporter</span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className='filterbox'>
          <div className='heading'>Manufacturer</div>
          <div className='lists'>
            <ul className='listbox'>
            <li className='listitem'>
                <span>Intas Pharmaceutical </span>
              </li>
              <li className='listitem'>
                <span>Alkern Laboratories </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='filterbox'>
          <div className='heading'>Strength</div>
          <div className='lists'>
            <ul className='listbox'>
              <li className='listitem'style={{'background-color':'teal','color':'white'}}>
                <span>500 mg</span>
              </li>
              <li className='listitem'>
                <span>650 mg</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='filterbox'>
          <div className='heading'>Prescription/Non prescription</div>
          <div className='lists'>
            <ul className='listbox'>
            <li className='listitem'>
                <span>Intas Pharmaceutical </span>
              </li>
              <li className='listitem'>
                <span>Alkern Laboratories </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    
    </div>
  )
}

export default Sidebar