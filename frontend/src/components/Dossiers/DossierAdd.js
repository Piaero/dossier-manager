import React from 'react';

import './DossierAdd.css';

export class DossierAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceStatus: ['brak', 'proforma', 'końcowa', 'korekta'],
      paymentStatus: ['zaliczka', 'całość', 'zwrot'],
      commission: ['ER', 'GF', 'SA', 'TC', 'inne'],
      pilot: ['Testowy Pierwszy', 'Monika Kapłon', 'Ewa Wrzesińska', 'Gal An'],
      pilotStatus: [
        'OK',
        'zapytałem',
        'anulacja',
        'zapytać',
        'wstępna sugestia',
        'inne',
      ],
      dossierStatus: [
        'REPORTE',
        'ANULOWANE',
        'OK',
        'MA SZANSE',
        'REALISE',
        'SANS SUITE',
        'DOUBLEE',
      ],
      productType: [
        'weekends',
        'jeunes',
        'polonia',
        'pelerinages',
        'affaires',
        'à theme',
        'circuit à theme',
        'weekend à theme',
        'polonia à theme',
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.number = React.createRef();
    this.accountingNumber = React.createRef();
    this.invoiceStatus = React.createRef();
    this.commission = React.createRef();
    this.pax = React.createRef();
    this.dateOfArrival = React.createRef();
    this.dateOfDeparture = React.createRef();
    this.cityOfArrival = React.createRef();
    this.cityOfDeparture = React.createRef();
    this.stayDuration = React.createRef();
    this.transportation = React.createRef();
    this.pilot = React.createRef();
    this.pilotStatus = React.createRef();
    this.responsible = React.createRef();
    this.dossierStatus = React.createRef();
    this.productType = React.createRef();
    this.notes = React.createRef();
    this.dateCreated = React.createRef();
    this.dateModified = React.createRef();
    this.createdBy = React.createRef();
    this.modifiedBy = React.createRef();
  }

  handleSubmit(event) {
    let dossier = {};

    dossier.number = this.number.current.value;
    dossier.accountingNumber = this.accountingNumber.current.value;
    dossier.invoiceStatus = this.invoiceStatus.current.value;
    dossier.commission = this.commission.current.value;
    dossier.pax = this.pax.current.value;
    dossier.dateOfArrival = this.dateOfArrival.current.value;
    dossier.dateOfDeparture = this.dateOfDeparture.current.value;
    dossier.cityOfArrival = this.cityOfArrival.current.value;
    dossier.cityOfDeparture = this.cityOfDeparture.current.value;
    dossier.stayDuration = this.stayDuration.current.value;
    dossier.transportation = this.transportation.current.value;
    dossier.pilot = this.pilot.current.value;
    dossier.pilotStatus = this.pilotStatus.current.value;
    dossier.responsible = this.responsible.current.value;
    dossier.dossierStatus = this.dossierStatus.current.value;
    dossier.productType = this.productType.current.value;
    dossier.notes = this.notes.current.value;
    dossier.dateCreated = this.dateCreated.current.value;
    dossier.dateModified = this.dateModified.current.value;
    dossier.createdBy = this.createdBy.current.value;
    dossier.modifiedBy = this.modifiedBy.current.value;

    alert(JSON.stringify(dossier));
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <table>
            <caption>Dodaj dossier: </caption>

            <thead>
              <tr>
                {this.props.columns.map((column, index) => {
                  return (
                    <th id={column.accessor} key={index}>
                      {column.Header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type='text' ref={this.number} />
                </td>
                <td>
                  <input type='text' ref={this.accountingNumber} />
                </td>
                <td>
                  <input
                    list='invoiceStatuses'
                    name='Faktura'
                    id='invoiceStatus'
                    ref={this.invoiceStatus}
                  />
                  <datalist id='invoiceStatuses'>
                    {this.state.invoiceStatus.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input
                    list='paymentStatuses'
                    name='Płatność'
                    id='paymentStatus'
                    ref={this.invoiceStatus}
                  />
                  <datalist id='paymentStatuses'>
                    {this.state.paymentStatus.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input
                    list='commissions'
                    name='Prowizja'
                    id='commission'
                    ref={this.commission}
                  />
                  <datalist id='commissions'>
                    {this.state.commission.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input type='text' ref={this.pax} />
                </td>
                <td>
                  <input type='date' ref={this.dateOfArrival} />
                </td>
                <td>
                  <input type='date' ref={this.dateOfDeparture} />
                </td>
                <td>
                  <input type='text' ref={this.cityOfArrival} />
                </td>
                <td>
                  <input type='text' ref={this.cityOfDeparture} />
                </td>
                <td>
                  <input type='number' ref={this.stayDuration} />
                </td>
                <td>
                  <input type='text' ref={this.transportation} />
                </td>
                <td>
                  <input
                    list='pilots'
                    name='Pilot'
                    id='pilot'
                    ref={this.pilot}
                  />
                  <datalist id='pilots'>
                    {this.state.pilot.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input
                    list='pilotStatuses'
                    name='Pilot - Stan'
                    id='pilotStatus'
                    ref={this.pilotStatus}
                  />
                  <datalist id='pilotStatuses'>
                    {this.state.pilotStatus.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input type='text' ref={this.responsible} />
                </td>
                <td>
                  <input
                    list='dossierStatuses'
                    name='Stan grupy'
                    id='dossierStatus'
                    ref={this.dossierStatus}
                  />
                  <datalist id='dossierStatuses'>
                    {this.state.dossierStatus.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input
                    list='productTypes'
                    name='Typ produktu	'
                    id='productType'
                    ref={this.productType}
                  />
                  <datalist id='productTypes'>
                    {this.state.productType.map((status, index) => {
                      return <option value={status} key={index} />;
                    })}
                  </datalist>
                </td>
                <td>
                  <input type='text' ref={this.notes} />
                </td>
                <td>
                  <input type='text' ref={this.dateCreated} />
                </td>
                <td>
                  <input type='text' ref={this.dateModified} />
                </td>
                <td>
                  <input type='text' ref={this.createdBy} />
                </td>
                <td>
                  <input type='text' ref={this.modifiedBy} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type='submit' value='Dodaj' />
        </form>

        <br />
        <br />
        <br />
        <br />
      </section>
    );
  }
}
