import { capitalizeFirstLetter } from "./capitalizeFirstLetter"

export const fullName = (user) => {
  return capitalizeFirstLetter(user.firstname) + " " + capitalizeFirstLetter(user.lastname)
}