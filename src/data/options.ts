import { SelectOption } from "../components/select/types";

export const roles: SelectOption<string>[] = [
  { value: "select-roles", label: "Select Role" },
  { value: "sadmin", label: "Super Admin" },
  { value: "admin", label: "Admin" },
  { value: "member", label: "Member" },
];