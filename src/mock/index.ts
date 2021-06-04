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
  filterable?:boolean
  divider?:boolean
}



// ===============================

export const editAdminFields =  [
  {
    title: "Admin ID:",
    icon: "mdi-account-group-outline",
    type: "text",
    field: "",
    value: "",
  },
  {
    title: "First name:",
    icon: "mdi-phone",
    field: "",
    required: true,
    type: "text",
  },
  {
    title: "Last name:",
    icon: "mdi-account-circle",
    field: "",
    required: true,
    value: "",
    type: "text",
  },
  {
    title: "Language:",
    icon: "mdi-account-group",
    field: "",
    type: "text",
    required: true,
  },

  {
    title: "Email:",
    icon: "mdi-magnify",
    field: "",
    required: true,
    type: "text",
  },
  {
    title: "New password:",
    icon: "mdi-magnify",
    type: "password",
    field: "",
    showPass: false,
    appendIcon: "mdi-eye-off",
  },
  {
    title: "Confirm password:",
    icon: "mdi-magnify",
    field: "",
    type: "password",
    showPass: false,
    appendIcon: "mdi-eye-off",
  },
];

export type EditAdminField = {
  title: string
  icon: string
  field: string
  value?: string
  required?:boolean
 type?:string
 showPass?:boolean
 appendIcon?:string
}



