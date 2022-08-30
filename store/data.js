// import Math from 'Math'
export const state = () => ({
  columns: [
    {
      label: 'ID',
      field: 'id',
    },
    {
      label: 'Name',
      field: 'name',
      type: 'string',
    },
    {
      label: 'User Name',
      field: 'username',
      type: 'string',
    },
    {
      label: 'E-mail',
      field: 'email',
      type: 'string',
    },
    {
      label: 'Telefone',
      field: 'phone',
      type: 'string',
    },
    {
      label: 'Website',
      field: 'website',
      type: 'string',
    },
    {
      label: 'Empresa',
      field: 'company',
      type: 'string',
    },
    {
      label: 'Endereço',
      field: 'address',
      type: 'string',
    },
    {
      label: 'Tipo',
      field: 'type',
      type: 'string',
    },
  ],
  rows: [],
  results: [],
  teste: '',
})

export const mutations = {
  ADD_RESULT: (state, payload) => {
    state.results.push(payload)
  },
  SET_USER: (state, payload) => {
    // for (const item of state.results) {
    //   if (item.id === payload.id) {
    //     state.teste = item
    //   }
    // }
    state.teste = payload
  },
}

export const actions = {}
