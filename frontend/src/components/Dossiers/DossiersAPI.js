export const DossiersAPI = {
  getDossiers: () => {
    return fetch('/dossiers').then((response) => response.json());
  },

  addDossier: (dossier) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dossier }),
    };
    return fetch('/add-dossier', requestOptions);
  },
};
