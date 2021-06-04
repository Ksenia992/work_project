export const adminTableHeaders = [
    {
      text: "ID",
      align: "start",
      sortable: false,
      value: "id",
    },
    { text: "First name", value: "firstName" },
    { text: "Last name", value: "lastName" },
    { text: "Language", value: "language" },
    { text: "", value: "actions" },
];

export type AdminTableHeader = {
  text: string
  align?: string
  sortable?: boolean
  value: string
}


// ====================================


export const tenantsTableHeaders = [
  {
    text: "№",
    align: "start",
    sortable: false,
    value: "name",
    filterable: false,
    divider: true,
  },
  { text: "ID", value: "type" },
    { text: "Name", value: "name" },
    { text: "Type", value: "email" },
];


export type TenantsTableHeader = {
  text: string
  align?: string
  sortable?: boolean
  value: string
  filterable:boolean
  divider:boolean
}
