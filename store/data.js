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
  ],
  rows: [],
})

export const mutations = {
  ADD_ROWS: (state, payload) => {
    const rows = []
    for (const item of payload) {
      const parser = {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        phone: item.phone,
        website: item.website,
        company: item.company.name,
      }
      rows.push(parser)
    }
    state.rows.push(rows)
  },
}

export const actions = {}
